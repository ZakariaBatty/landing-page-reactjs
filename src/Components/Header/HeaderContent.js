import React from 'react';
import styled from 'styled-components';

const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <h1>Smart banking for freelancers</h1>
        <p className="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          provident nulla numquam nisi obcaecati accusamus tempore saepe totam
          dolorem odit necessitatibus impedit magni, iure repellat eaque
          voluptates dolorum possimus corrupti.
        </p>
      </div>
      <div className="right-content"></div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div``;

export default HeaderContent;
