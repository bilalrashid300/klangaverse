import proptypes from "proptypes";
import React from "react";
import styled from "styled-components";
import PageContent from "./PageContent";
import ScrollToTop from "./ScrollToTop";
import SideNav from "./SideNav";

const PageWrapper = styled.div`
  background: #f7f6f5;
`;

const AuthenticatedPage = ({ children }) => {
  return (
    <ScrollToTop hasNavBar={false}>
      <PageWrapper>
        <SideNav />
        <div className="page-content">
          <PageContent>{children}</PageContent>
        </div>
      </PageWrapper>
    </ScrollToTop>
  );
};

AuthenticatedPage.propTypes = {
  children: proptypes.any,
};

export default AuthenticatedPage;
