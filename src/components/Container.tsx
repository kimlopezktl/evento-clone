import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl bg-coffee min-h-screen mx-auto flex flex-col">
      {children}
    </div>
  );
}
