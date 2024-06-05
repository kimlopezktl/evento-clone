import React from "react";

interface H1Props {
  children: React.ReactNode;
}

export default function H1({ children }: H1Props) {
  return (
    <h1 className="text-4xl font-bold tracking-tighter sm:text-7xl">
      {children}
    </h1>
  );
}
