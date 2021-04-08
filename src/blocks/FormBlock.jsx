import styled from "styled-components";
import {theme} from "../congif/theme";

const {fonts} = theme

export const FormBlock = styled.form`
  padding-top: 200px;
  margin: 0 auto;
  width: 40%;
  display: block;
  text-align: center;
  background: none;
  
  h1,h2,h3 {
    text-align: left;
    margin-bottom: 40px;
    color: ${fonts.formColor};
  }
  span {
    display: block;
    margin: 10px 2px;
    color: ${fonts.labelColor};
    text-align: left;
  }
`