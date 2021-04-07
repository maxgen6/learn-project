import styled from "styled-components";
import {theme} from "../theme/theme";

const {colors, fonts} = theme

export const TableBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colors.borderTable};
 ${props => props.styles || null}
`