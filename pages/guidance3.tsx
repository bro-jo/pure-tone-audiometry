import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Title} from '../src/components/text';
import {ButtonBox, CustomContainer} from '../src/components/box';
import {EarImage} from '../src/components/icon';
import Link from 'next/link';

class Guidance3 extends React.Component {

  render() {
    return (
      <div>
        <CustomContainer className="my-3 p-3 bg-white">
          <Row>
            <Col className="col-sm-12 my-3">
              <EarImage />
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12 mb-5">
              <Title>
                이제 테스트를<br />
                시작합니다<br />
                테스트가 끝난 후<br />
                꼭 <span className="text-primary">볼륨</span>을<br />
                다시 <span className="text-primary">낮춰</span>주세요
              </Title>
            </Col>
          </Row>
          <ButtonBox className="align-items-end">
            <Col className="col-sm-12 mb-2">
              <Link href="/ta1">
                <Button className="btn-block">테스트 시작하기</Button>
              </Link>
            </Col>
          </ButtonBox>
        </CustomContainer>
      </div>
    )
  }
}

export default Guidance3;