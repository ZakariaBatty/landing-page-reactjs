import React from 'react';
import styled from 'styled-components';
import arrow from '../../img/arrow.svg';

const SecondaryButton = ({ name }) => {
  return (
    <SecondaryButtonStyled>
      {name}
      <img src={arrow} alt="icon" />
    </SecondaryButtonStyled>
  );
};

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 2rem;
  font-family: inherit;
  fony-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    padding-left: 0.9rem;
  }
`;

export default SecondaryButton;
