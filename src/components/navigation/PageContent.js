import proptypes from "proptypes";
import React from "react";
import styled from "styled-components";
import TopNav from "./TopNav";

const Container = styled.div`
  margin-left: 256px;
  padding-left: 36px;
  min-height: 100vh;
  .content {
    padding-top: 138px;
    padding-right: 36px;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    padding-left: 20px;
    .content {
      padding-right: 20px;
    }
  }
`;

const hideSideNav = () => {
  document.getElementById("sidenav").classList.remove("active");
};

const PageContent = ({ children }) => {
  return (
    <Container>
      <TopNav />
      <div className="content" onClick={hideSideNav}>
        {children}
      </div>
    </Container>
  );
};

PageContent.propTypes = {
  children: proptypes.any,
};

export default PageContent;
