import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Guidance, Title} from '../src/components/text';
import {ButtonBox, CustomContainer} from '../src/components/box';
import {HeadsetImage} from '../src/components/icon';
import Link from 'next/link';

class Guidance1 extends React.Component {

  render() {
    return (
      <div>
        <CustomContainer className="my-3 p-3 bg-white">
          <Row>
            <Col className="col-sm-12 my-3">
              <HeadsetImage />
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12 mb-5">
              <Title>
                이어폰<br />
                볼륨을<br />
                <span className="text-primary">가장 크게</span> 설정한 후<br />
                테스트를 진행하세요
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="col-sm-8 mb-5">
              <Guidance className="ml-3 mt-5">
                * 간단한 청력 테스트에 도움을 주는 보조 테스트이며,
                전문적인 <span className="text-primary">의료행위를 대체할 수 없습니다.</span>
              </Guidance>
            </Col>
          </Row>
          <ButtonBox className="align-items-end">
            <Col className="col-sm-12 mb-2">
              <Link href="/guidance2">
                <Button className="btn-block">다음</Button>
              </Link>
            </Col>
          </ButtonBox>
        </CustomContainer>
      </div>
    )
  }
}

export default Guidance1;