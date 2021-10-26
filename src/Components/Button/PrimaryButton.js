import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ name }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background-color: var(--accent-pink);
  padding: 0.7rem 2rem;
  font-family: inherit;
  fony-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default PrimaryButton;
