import * as React from "react";
import Header from "../../molecules/Header";

interface CommonPageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  childrenMargin?: boolean;
  showMenuHeader?: boolean;
}

const CommonPageLayout: React.FC<CommonPageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default CommonPageLayout;
