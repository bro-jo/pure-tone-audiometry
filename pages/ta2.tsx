import React from 'react';
import {Alert, Button, Col, ProgressBar, Row, Table} from 'react-bootstrap';
import {Guidance, Title} from '../src/components/text';
import {ButtonBox, CustomContainer} from '../src/components/box';
import Router from 'next/router';

const PAN_LEFT_VALUE = -0.9;
const PAN_RIGHT_VALUE = 0.9;
const CANDIDATE_FREQUENCIES = [250, 500, 1000, 2000, 4000, 8000];
const CANDIDATE_GAIN = [0.001, 0.002, 0.003, 0.004, 0.006, 0.01];
const GAIN_MAX_VALUE = CANDIDATE_GAIN[CANDIDATE_GAIN.length - 1];
const MAX_STEPS = 20;

enum Pan {
  Left = 'Left',
  Right = 'Right',
}

interface IResult {
  frequency: number;
  pan: Pan;
  volume: number;
  correct: boolean;
}

interface IState {
  isSideChanged: boolean;
  step: number;
  isFinished: boolean;
  frequency: number;
  panValue: number;
  volume: number;
  results: Array<IResult>;
  shouldBlockButton: boolean;
}

class Ta1 extends React.Component {
  private audioContext: AudioContext;
  private oscillator: OscillatorNode;
  private gainNode: GainNode;
  private panNode: StereoPannerNode | PannerNode;
  private audioContextHistory: AudioContext[] = [];

  state: IState = {
    isSideChanged: false,
    step: 0,
    isFinished: false,
    frequency: undefined,
    panValue: undefined,
    volume: undefined,
    results: [],
    shouldBlockButton: false,
  };

  componentDidMount(): void {
    console.log('componentDidMount');
    this.initAudio();
    setTimeout(() => {
      try {
        this.oscillator.stop();
      } catch (e) {
        console.warn(e);
      }
      this.oscillator.start();
    }, 300);
  }

  private initAudio() {
    const W = window as any;
    this.audioContext = new (W.AudioContext || W.webkitAudioContext)();
    this.audioContextHistory.push(this.audioContext);
    this.oscillator = this.audioContext.createOscillator();
    this.gainNode = this.audioContext.createGain();

    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = 440;

    if (this.audioContext.createStereoPanner) {
      this.panNode = this.audioContext.createStereoPanner();
      this.panNode.pan.value = PAN_LEFT_VALUE;
    } else {
      this.panNode = this.audioContext.createPanner();
      this.panNode.setPosition(PAN_LEFT_VALUE < 0 ? -1 : 1, 0, 0);
    }
    this.oscillator.connect(this.panNode);
    this.panNode.connect(this.gainNode);

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = GAIN_MAX_VALUE;
    console.log('this.gainNode.gain.value', this.gainNode.gain.value);
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
    try {
      this.gainNode.gain.value = 0;
      this.panNode.pan.value = 0;
      this.oscillator.disconnect();
      this.audioContext.close();
    } catch (err) {
      console.error('stopAudio error');
    } finally {
      this.stopAudio();
    }
  }

  private getRandomGain() {
    return CANDIDATE_GAIN[Math.floor(Math.random() * (CANDIDATE_GAIN.length - 2))];
  }

  private getRandomFrequency() {
    return CANDIDATE_FREQUENCIES[Math.floor(Math.random() * CANDIDATE_FREQUENCIES.length)];
  }

  private stopAudio() {
    try {
      this.audioContextHistory.map(async (context) => {
        try {
          await context.close()
        } catch (err) {
        }
      });
    } catch (err) {
      console.error('stopAudio error');
    }

    try {
      // this.audioContextHistory.forEach(async () => await ());
      this.gainNode.gain.value = 0;
      this.oscillator.disconnect();
      this.audioContext.close();
      this.audioContext = null;
      this.gainNode = null;
      this.panNode = null;
    } catch (err) {
      console.error('stopAudio error');
    }
  }

  private startAudio() {
    const W = window as any;
    const frequency = this.getRandomFrequency();
    const panValue = Math.random() < 0.5 ? PAN_LEFT_VALUE : PAN_RIGHT_VALUE;
    const volume = this.getRandomGain();

    this.setState({frequency, panValue, volume});

    this.audioContext = new (W.AudioContext || W.webkitAudioContext)();
    this.audioContextHistory.push(this.audioContext);
    this.oscillator = this.audioContext.createOscillator();
    this.gainNode = this.audioContext.createGain();

    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = frequency;

    if (this.audioContext.createStereoPanner) {
      this.panNode = this.audioContext.createStereoPanner();
      this.panNode.pan.value = panValue;
    }
    else {
      this.panNode = this.audioContext.createPanner();
      this.panNode.setPosition(panValue < 0 ? -1 : 1, 0, 0);
    }
    this.oscillator.connect(this.panNode);
    this.panNode.connect(this.gainNode);

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = volume;

    console.log('this.oscillator.frequency.value ', this.oscillator.frequency.value);
    console.log('panValue', panValue);
    console.log('this.gainNode.gain.value', this.gainNode.gain.value);

    this.oscillator.start();
  }

  render() {
    if (this.state.isFinished) {
      const correctCount = this.state.results.filter(r => r.correct).length;
      const percent = Math.floor(correctCount / this.state.results.length * 100);
      console.log('this.state.results.filter(r => r.correct).length', this.state.results.filter(r => r.correct).length);
      console.log('this.state.results.length', this.state.results.length);
      console.log('percent', percent);

      return (
        <div>
          <CustomContainer className="my-3 p-3 bg-white">
            <Row>
              <Col className="col-sm-12 mb-5">
                <Title>
                  검사가<br />
                  <span className="text-primary">종료</span>되었습니다.<br />
                  꼭 <span className="text-primary">볼륨</span>을<br />
                  다시 <span className="text-primary">낮춰</span>주세요
                </Title>
              </Col>
            </Row>
            <Row>
              <Col className="col-sm-12 mb-5">
                <Table striped bordered hover>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>주파수</th>
                    <th>소리 크기</th>
                    <th>방향</th>
                    <th>O/X</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.results.map(({frequency, volume, pan, correct}, i) => (
                    <tr>
                      <td>{i}</td>
                      <td>{frequency}</td>
                      <td>{volume}</td>
                      <td>{pan}</td>
                      <td>{correct ? 'O' : 'X'}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>

                <Alert variant={percent >= 90 ? 'success' : percent >= 80 ? 'warning' : 'danger'}>
                  {correctCount}개 맞추셨네요.&nbsp;
                  {percent >= 90 ? '정상' : percent >= 80 ? '주의' : '위험'} 단계 입니다.
                </Alert>

                <Row className="justify-content-end">
                  <Col className="col-sm-8 mb-5">
                    <Guidance className="ml-3 mt-5">
                      * 간단한 청력 테스트에 도움을 주는 보조 테스트이며,
                      전문적인 <span className="text-primary">의료행위를 대체할 수 없습니다.</span>
                    </Guidance>
                    <Guidance className="ml-3 mt-2">
                      * 검사 종료 후 <span className="text-primary">기기의 볼륨</span>을
                      다시 <span className="text-primary">낮춰주세요.</span>
                    </Guidance>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CustomContainer>
        </div>
      );
    }

    return (
      <div>
        <CustomContainer className="my-3 p-3 bg-white">
          <Row>
            <Col className="col-sm-12 mb-5">
              <Title>
                <span className="text-primary">어느 쪽 귀</span>에서 들리시나요?<br />
              </Title>
              #{this.state.step}
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12 mb-5">
              <ProgressBar
                now={this.state.step}
                min={0}
                max={MAX_STEPS + 1}
              />
            </Col>
          </Row>
          <ButtonBox className="align-items-end">
            <Col className="col-12 mt-2 text-center">
              <Button
                className="btn-block"
                disabled={this.state.shouldBlockButton}
                onClick={() => this.handleNothing()}
              >
                들리지 않음
              </Button>
            </Col>
            <Col className="col-12 mt-2 text-center">
              <Button
                className="btn-block"
                disabled={this.state.shouldBlockButton}
                onClick={() => this.handleLeft()}
              >
                왼쪽
              </Button>
            </Col>
            <Col className="col-12 mt-2 text-center">
              <Button
                className="btn-block"
                disabled={this.state.shouldBlockButton}
                onClick={() => this.handleRight()}
              >
                오른쪽
              </Button>
            </Col>
          </ButtonBox>
        </CustomContainer>
      </div>
    )
  }

  private saveResult({choice}: { choice?: Pan }) {
    this.setState((prevState: IState) => {
      const pan = prevState.panValue < 0 ? Pan.Left: Pan.Right;
      console.log('prevState.pan', pan);
      console.log('choice', choice);
      console.log('prevState.pan === choice', pan === choice);

      const resultOfCurrentStep: IResult = {
        frequency: prevState.frequency,
        pan: pan,
        volume: prevState.volume,
        correct: prevState.isSideChanged ? pan !== choice : pan === choice,
      };

      const results = prevState.results.concat([resultOfCurrentStep]);
      results.sort((e1, e2) => e1.frequency - e2.frequency);
      return {results};
    });
  }

  private goToNextSound() {
    const {step} = this.state;
    this.setState({shouldBlockButton: true});

    if (step === MAX_STEPS) {
      this.finishTest();
      return;
    }

    this.setState((prevState: IState) => ({step: prevState.step + 1}));
    setTimeout(() => this.startAudio(), 1000);
    setTimeout(() => this.setState({shouldBlockButton: false}), 1500);
  }

  private finishTest() {
    this.setState({isFinished: true});
    setTimeout(() => this.stopAudio(), 500);
  }

  private handleNothing() {
    const {step} = this.state;

    this.stopAudio();

    if (step === 0) {
      Router.push('/wrong?msg=들리지%20않음');
      return;
    }

    this.saveResult({choice: undefined});
    this.goToNextSound();
  }

  private handleLeft() {
    const {step} = this.state;

    this.stopAudio();

    if (step === 0) {
      this.setState({isSideChanged: false, step: 1, shouldBlockButton: true});
      setTimeout(() => this.startAudio(), 1000);
      setTimeout(() => this.setState({shouldBlockButton: false}), 1500);
      return;
    }

    this.saveResult({choice: Pan.Left});
    this.goToNextSound();
  }

  private handleRight() {
    const {step} = this.state;

    this.stopAudio();

    if (step === 0) {
      this.setState({isSideChanged: true, step: 1, shouldBlockButton: true});
      setTimeout(() => this.startAudio(), 1000);
      setTimeout(() => this.setState({shouldBlockButton: false}), 1500);
      return;
    }

    this.saveResult({choice: Pan.Right});
    this.goToNextSound();
  }
}

export default Ta1;