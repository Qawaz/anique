import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  padding: 0.9em;
  //font-size: 0.8em;
  //font-family: inherit;
  letter-spacing: 0.1em;
  border: 3px solid #d7d7d7;
  border-radius: 6px;
  //border-radius: 0 0.4em 0.4em 0;
  transition: border-color 0.3s ease;
  //border-style:ridge;

  font-family: ${props=> props.theme.font.fontSecondary};
  font-size: ${props=> props.theme.fontSize.fontSize4};

  &:focus {
    outline: none;
    border-color: #2962ff;
  }
`