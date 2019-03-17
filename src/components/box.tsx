import styled from 'styled-components';
import {Container} from 'react-bootstrap';

export const CustomContainer = styled(Container)`
  position: relative;
  max-width: 360px;
  min-height: 90vh;
  color: #333;
  box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);
`;

export const ButtonBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 10px;
  right: 0;
`;