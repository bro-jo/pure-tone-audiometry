import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Title} from '../src/components/text';
import {ButtonBox, CustomContainer} from '../src/components/box';
import {SpeakerImage} from '../src/components/icon';
import Link from 'next/link';
import {Audio} from '../src/components/audio';

class Guidance2 extends React.Component {

  render() {
    return (
      <div>
        <CustomContainer className="my-3 p-3 bg-white">
          <Row>
            <Col className="col-sm-12 my-3">
              <SpeakerImage />
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12 mb-5">
              <Title>
                목소리가<br />
                잘 <span className="text-primary">들리시나요?</span>
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="col-sm-11 mb-5">
              <Audio controls={true} controlsList="nodownload">
                Your browser does not support the <code>audio</code> element.
                <source src="/static/sound/sound_check.mp3" type="audio/mp3" />
              </Audio>
            </Col>
          </Row>
          <ButtonBox className="align-items-end">
            <Col className="col-sm-12 mb-2">
              <Link href="/guidance3">
                <Button className="btn-block">네, 들립니다</Button>
              </Link>
            </Col>
          </ButtonBox>
        </CustomContainer>
      </div>
    )
  }
}

export default Guidance2;