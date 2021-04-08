import styled from "styled-components";
import {theme} from "../congif/theme";

const {colors} = theme

export const Modal = styled.div`
  position: absolute;
  top: ${props => (props.coordinationY - 35)}px;
  left: ${props => (props.coordinationX + 92)}px;
  display: block;
  width: 300px;
  //min-height: 100px;
  background: ${colors.activeBtn};
  color: #000;
  ${props => props.position === 'before' ? `
    :before {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    border-top: 15px solid transparent;
    border-right: 15px solid ${colors.activeBtn};
    border-bottom: 15px solid transparent;
  }
  ` : `
    :after {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    border-top: 15px solid transparent;
    border-left: 15px solid ${colors.activeBtn};
    border-bottom: 15px solid transparent;
  }
  `}
  
  
  ${props => props.styled || null}
`