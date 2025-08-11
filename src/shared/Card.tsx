import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

// Basic card container with subtle border, background and padding.
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
