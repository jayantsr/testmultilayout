import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: grey;
  color: white;
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Wrapper>Main Layout Header</Wrapper>
      <main>{children}</main>
      <footer>Main Layout Footer</footer>
    </div>
  );
};

export default MainLayout;
