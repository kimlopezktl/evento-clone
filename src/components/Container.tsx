import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-white/[2%]">
      {children}
    </div>
  );
}
