import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

// Simple button variants built with Tailwind utilities.
export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-400 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
      : "bg-white text-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-100 dark:ring-neutral-800 dark:hover:bg-neutral-900";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
