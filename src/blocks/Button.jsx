import styled from "styled-components"
import {theme} from "../congif/theme";

const {colors, fonts} = theme

export const Button = styled.button`
  display: block;
  margin: ${props => props.margin || "0"};
  padding: 8px 10px;
  border-radius: 3px;
  background: ${props => props.forms ? colors.formBtn : colors.activeBtn};
  outline: none;
  color: ${props => props.forms ? fonts.formColor : fonts.defaultColor};
  font-size: ${fonts.defaultSize};
  cursor: pointer;
  border: none;
  font-weight: ${fonts.defaultWeight};
  font-family: ${fonts.defaultFont};
  transition: .5s all;
  :hover {
    background: ${props => props.forms ? colors.formBtnHover : colors.activeBtnHover};
  }
  ${props => props.styles || null}
`

export const LargeButton = styled(Button)`
  width: 100%;
`