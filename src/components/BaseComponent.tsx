import React, { ReactNode } from "react";

interface BaseComponentProps {
  leftSideContent: ReactNode;
  children: ReactNode;
}

const BaseComponent: React.FC<BaseComponentProps> = ({
  leftSideContent,
  children,
}) => {
  return (
    <div className="flex rounded-md p-3 mb-4 hover:bg-white/5">
      <div className="mt-1 mr-4 flex-shrink-0 font-semibold text-slate text-xs text-transform: uppercase">
        {leftSideContent}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BaseComponent;