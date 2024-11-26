import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: blue;
  color: white;
`;

const AdminLayout = ({ children }) => {
  return (
    <>
      <Wrapper>Admin Dashboard</Wrapper>
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
