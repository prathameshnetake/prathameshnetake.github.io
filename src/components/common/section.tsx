import React, { Children } from "react";

export const Section: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="h-screen w-full">{children}</div>;
};
