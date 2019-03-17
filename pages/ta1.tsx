import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Title} from '../src/components/text';
import {CustomContainer} from '../src/components/box';
import {Audio} from '../src/components/audio';
import {CatCircleImage, DrillCircleImage, EmployeeCircleImage} from '../src/components/circleIcon';
import Router from 'next/router';

enum SoundObject {
  DRILL = 'DRILL',
  CAT = 'CAT',
  EMPLOYEE = 'EMPLOYEE',
}

interface IState {
  soundObject?: SoundObject;
  soundFilePath: string;
}

class Ta1 extends React.Component {
  state: IState = {
    soundObject: undefined,
    soundFilePath: '',
  };

  componentDidMount(): void {
    const randomNumber = Math.random();
    const soundObject = randomNumber > 0.66
      ? SoundObject.DRILL
      : randomNumber > 0.33
        ? SoundObject.CAT
        : SoundObject.EMPLOYEE;

    const soundFilePath = soundObject === SoundObject.DRILL
      ? '/static/sound/speech_drill.mp3'
      : soundObject === SoundObject.CAT
        ? '/static/sound/speech_cat.mp3'
        : soundObject === SoundObject.EMPLOYEE
          ? '/static/sound/speech_employee.mp3'
          : '';

    this.setState({soundObject, soundFilePath});
  }

  render() {
    return (
      <div>
        <CustomContainer className="my-3 p-3 bg-white">
          <Row>
            <Col className="col-sm-12 mb-5">
              <Title>
                목소리를 듣고<br />
                적절한 <span className="text-primary">그림을 선택</span>해주세요
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="col-sm-11 mb-3">
              {this.state.soundFilePath ? (
                <Audio
                  controls={true}
                  controlsList="nodownload"
                >
                  Your browser does not support the <code>audio</code> element.
                  <source
                    src={this.state.soundFilePath}
                    type="audio/mp3"
                  />
                </Audio>
              ) : '로딩 중...'}
            </Col>
          </Row>
          <Row>
            <Col className="col-4 mt-5 text-center">
              <DrillCircleImage onClick={() => this.checkAnswer(SoundObject.DRILL)} />
            </Col>
            <Col className="col-4 mt-5 text-center">
              <CatCircleImage onClick={() => this.checkAnswer(SoundObject.CAT)} />
            </Col>
            <Col className="col-4 mt-5 text-center">
              <EmployeeCircleImage onClick={() => this.checkAnswer(SoundObject.EMPLOYEE)} />
            </Col>
          </Row>
        </CustomContainer>
      </div>
    )
  }

  private checkAnswer(answer: SoundObject) {
    console.log('answer', answer);
    console.log('this.state.soundObject', this.state.soundObject);
    console.log('this.state.soundObject', this.state.soundObject === answer);
    if (this.state.soundObject === answer) {
      Router.push('/ta2');
      return;
    }

    Router.push('/wrong');
  }
}

export default Ta1;