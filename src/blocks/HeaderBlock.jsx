import styled from "styled-components";

export const HeaderBlock = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${props => props.styles || null}
`