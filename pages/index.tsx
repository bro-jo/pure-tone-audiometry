import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Title} from '../src/components/text';
import {ButtonBox, CustomContainer} from '../src/components/box';
import Link from 'next/link';
import {EarImage} from '../src/components/icon';

class Index extends React.Component {

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
                안녕하세요<br />
                <span className="text-primary">간편</span>하게 하실 수 있는<br />
                온라인 <span className="text-primary">청력 테스트</span>
                <br />입니다
              </Title>
            </Col>
          </Row>
          <ButtonBox className="align-items-end">
            <Col className="col-sm-12 mb-2">
              <Link href="/guidance1">
                <Button className="btn-block">다음</Button>
              </Link>
            </Col>
          </ButtonBox>
        </CustomContainer>
      </div>
    )
  }
}

export default Index;