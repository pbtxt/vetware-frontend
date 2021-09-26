import * as React from "react";
import Header from "../../molecules/Header";
import { LayoutContainer, CommonLayoutContainer } from "./styles";

interface CommonPageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  childrenMargin?: boolean;
  showMenuHeader?: boolean;
}

const CommonPageLayout: React.FC<CommonPageLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <CommonLayoutContainer>{children}</CommonLayoutContainer>
      </main>
    </LayoutContainer>
  );
};

export default CommonPageLayout;
