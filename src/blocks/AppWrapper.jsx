import styled from "styled-components";
import {theme} from "../congif/theme";

const {colors} = theme

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${colors.appBg};
`