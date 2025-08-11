import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

// Basic card container with subtle border, background and padding.
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 ${className}`}
    >
      {children}
    </div>
  );
}
