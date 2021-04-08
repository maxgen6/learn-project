import styled from "styled-components";
import {theme} from "../congif/theme";

const {colors} = theme

export const TableBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colors.borderTable};
 :hover {
  background: ${colors.modalBg};
 }
 :active {
  background: ${colors.modalBg};
 }
 :first-child:hover {
  background: ${colors.headerTableBg};
 }
 

 ${props => props.styles || null}
`