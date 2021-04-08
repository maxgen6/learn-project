import styled from "styled-components";
import {theme} from "../congif/theme";

const {colors, fonts} = theme

export const TableBlockItem = styled.div`
  width: calc(100% / ${props => props.size});
  padding: .5rem;
  border-left: 1px solid ${colors.borderTable};
  color: ${fonts.formColor};
  text-align: center;
  font-weight: ${fonts.defaultWeight};
  cursor: pointer;
  :first-child {
    width: 30%;
    border-left: none;
    cursor: auto;
  };
  ${props => props.styles || null}
`