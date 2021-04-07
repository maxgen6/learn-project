import styled from "styled-components";
import {theme} from "../theme/theme";

const {colors, fonts} = theme

export const Input = styled.input`
  width: ${props => props.width || "100%"};
  display: block;
  border-radius: 8px;
  background: ${colors.inputBg};
  outline: none;
  border: none;
  padding: 15px;
  color: ${fonts.formColor};
  ${props => props.styles || null}
  
`