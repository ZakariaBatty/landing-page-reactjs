import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import styled from 'styled-components';
//@ icons
import avatar1 from '../../img/avatar1.svg';
import avatar2 from '../../img/avatar2.svg';
import avatar3 from '../../img/avatar3.svg';
import avatar4 from '../../img/avatar4.svg';
import avatar5 from '../../img/avatar5.svg';
import messaging from '../../img/conversation.svg';
import bgcircles from '../../img/circleBg.svg';

const MessagingSection = () => {
  return (
    <MessageStyle>
      <InnerLayout>
        <div className="message-container">
          <div className="left-items">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="m-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus nihil officiis, reprehenderit consectetur deserunt nam
              debitis numquam illum,
            </p>
            <div className="images-con">
              <img src={avatar1} alt="icon" className="image-1" />
              <img src={avatar2} alt="icon" className="image-2" />
              <img src={avatar3} alt="icon" className="image-3" />
              <img src={avatar4} alt="icon" className="image-4" />
              <img src={avatar5} alt="icon" className="image-5" />
              <p>&nbsp; +25</p>
            </div>
            <img src={bgcircles} className="bgCircle" alt="icon" />
          </div>
          <div className="right-items">
            <img src={bgcircles} alt="icon" className="bgCircle" />
            <img src={messaging} alt="img" />
          </div>
        </div>
      </InnerLayout>
    </MessageStyle>
  );
};

const MessageStyle = styled.section`
  .message-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .left-items {
    position: relative;
    padding-right: 2rem;
    .m-para {
      padding: 1rem 0;
    }
    .images-con {
      display: flex;
      align-items: center;
      .image-2,
      .image-3,
      .image-4,
      .image-5 {
        margin-left: -14px;
      }
    }
    .bgCircle {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .right-items {
    position: relative;
    img {
      padding-left: 2rem;
    }
    .bgCircle {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

export default MessagingSection;
