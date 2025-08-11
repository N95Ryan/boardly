import React from "react";
import { Plus } from "lucide-react";

type InviteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

// Link-like Invite button matching the mockup: small violet square with plus + violet label
export default function InviteButton({
  className = "",
  ...props
}: InviteButtonProps) {
  return (
    <button
      type="button"
      className={
        `inline-flex items-center gap-2 rounded-md p-0 text-sm font-medium text-[var(--brand)] ` +
        `focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 ${className}`
      }
      {...props}
    >
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-violet-50 text-[var(--brand)] ring-1 ring-violet-200"
        aria-hidden="true"
      >
        <Plus className="h-3.5 w-3.5" />
      </span>
      <span>Invite</span>
    </button>
  );
}
