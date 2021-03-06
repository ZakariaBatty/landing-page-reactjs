import React from 'react';
import SecondaryButton from '../Button/SecondaryButton';
import styled from 'styled-components';
import phone from '../../img/phone.svg';
import ring1 from '../../img/ring_orange.svg';
import message1 from '../../img/message_pink.svg';
import message2 from '../../img/message_blue.svg';

const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Smart banking for freelancers</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            provident nulla numquam nisi obcaecati accusamus tempore saepe totam
            dolorem odit necessitatibus impedit magni,
          </p>
          <SecondaryButton name={'Register Now'} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="img" className="phone" />
        <img src={ring1} alt="icon" className="ring1" />
        <img src={message1} alt="icon" className="message1" />
        <img src={message2} alt="icon" className="message2" />
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
      color: white;
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .phone {
      width: 80%;
    }
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
    }
  }
`;

export default HeaderContent;
