import styled from "styled-components";
import {theme} from "../congif/theme";

const {colors} = theme

export const Table = styled.section`
  margin-top: 50px;
  width: 100%;
  min-height: 80vh;
  border-radius: 8px;
  background: ${colors.tableBg};
`