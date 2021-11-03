import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import card from '../../img/creditcard.svg';

const CardSection = () => {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One card for all your payments
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur fugiat ex nemo sunt eaque provident nihil autem
              nesciunt placeat ipsum neque quod aperiam aliquam nisi iure
              tenetur,
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="images" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
};

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .card-right {
      display: flex;
      justify-content: flex-end;
    }

    .card-left {
      p {
        padding: 1rem 0;
      }
    }
  }
`;

export default CardSection;
