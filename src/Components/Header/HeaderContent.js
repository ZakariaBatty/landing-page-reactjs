import React from 'react';
import SecondaryButton from '../Button/SecondaryButton';
import styled from 'styled-components';
import phone from '../../img/phone.svg';
import ring1 from '../../img/ring_orange.svg';

const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Smart banking for freelancers</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            provident nulla numquam nisi obcaecati accusamus tempore saepe totam
            dolorem odit necessitatibus impedit magni, iure repellat eaque
            voluptates dolorum possimus corrupti.
          </p>
          <SecondaryButton name={'Register Now'} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="img" />
        <img src={ring1} alt="icon" className="ring1" />
      </div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 6rem;
    h1 {
      font-size: 3rem;
      font-weight: 600;
    }
    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
  .right-content {
    position: relative;
  }
`;

export default HeaderContent;
