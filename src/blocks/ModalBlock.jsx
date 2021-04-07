import styled from "styled-components";
import {theme} from "../theme/theme";

const {colors, fonts} = theme

export const ModalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #000;
 ${props => props.styles || null}
`