import React from "react";
import { Search } from "lucide-react";

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

// Accessible search input styled to match the provided mockup.
// Uses a label wrapper so clicking anywhere focuses the input.
export default function SearchBar({
  className = "",
  ...props
}: SearchBarProps) {
  return (
    <label
      className={
        `flex items-center gap-3 rounded-xl bg-neutral-100 px-4 py-3 text-sm text-neutral-600 ` +
        `focus-within:ring-2 focus-within:ring-neutral-300 ${className}`
      }
    >
      <Search className="h-5 w-5 text-neutral-400" aria-hidden="true" />
      <input
        type="search"
        aria-label={props["aria-label"] ?? "Search"}
        className="w-full bg-transparent outline-none placeholder:text-neutral-400"
        {...props}
      />
    </label>
  );
}
