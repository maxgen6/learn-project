import styled from "styled-components";
import {theme} from "../congif/theme";

const {fonts} = theme

export const ModalBlockItem = styled.div`
  width: 25%;
  padding: .2rem;
  border-left: 1px solid #000;
  color: #000;
  text-align: center;
  font-weight: ${fonts.defaultWeight};
  font-size: 12px;
  :first-child {
    border-left: none;
  };
  
  ${props => props.styles || null}
`