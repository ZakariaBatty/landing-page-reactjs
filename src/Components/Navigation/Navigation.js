import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../Button/PrimaryButton';
import logo from '../../img/logo.svg';

const Navigation = () => {
  return (
    <NavigationStyed>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
      </ul>
      <PrimaryButton name={'Sign Up'} />
    </NavigationStyed>
  );
};

const NavigationStyed = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;

export default Navigation;