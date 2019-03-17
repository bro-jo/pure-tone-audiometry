import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Title} from '../src/components/text';
import {ButtonBox, CustomContainer} from '../src/components/box';
import {Audio} from '../src/components/audio';
import Link from 'next/link';
import Router from 'next/router';
import {WrongImage} from '../src/components/icon';

enum SoundObject {
  DRILL = 'DRILL',
  CAT = 'CAT',
  EMPLOYEE = 'EMPLOYEE',
}

interface IState {
  soundObject?: SoundObject;
  soundFilePath: string;
  msg: string;
}

class Wrong extends React.Component {
  state: IState = {
    soundObject: undefined,
    soundFilePath: '',
    msg: '',
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

    const msg = Router.query['msg'];

    this.setState({soundObject, soundFilePath, msg});
  }

  render() {
    return (
      <div>
        <CustomContainer className="my-3 p-3 bg-white">
          <Row>
            <Col className="col-sm-12 my-3">
              <WrongImage />
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12 mb-5">
              <Title>
                {this.state.msg || '오답입니다'}<br />
              </Title>
            </Col>
          </Row>
          <ButtonBox className="align-items-end">
            <Col className="col-sm-12 mb-2">
              <Link href="/">
                <Button className="btn-light btn-block">처음으로</Button>
              </Link>
            </Col>
          </ButtonBox>
        </CustomContainer>
      </div>
    )
  }
}

export default Wrong;