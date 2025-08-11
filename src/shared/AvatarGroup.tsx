import React from "react";
import Avatar from "@/shared/Avatar";

type AvatarGroupProps = {
  users: Array<{ id: string; src?: string; initials?: string; alt?: string }>;
  size?: "sm" | "md" | "lg";
  max?: number;
};

// Overlapping avatars with a +N counter.
export default function AvatarGroup({
  users,
  size = 28,
  max = 4,
}: AvatarGroupProps) {
  const visible = users.slice(0, max);
  const remaining = users.length - visible.length;
  return (
    <div className="flex items-center">
      <div className="flex space-x-2">
        {visible.map((u) => (
          <Avatar
            key={u.id}
            src={u.src}
            initials={u.initials}
            alt={u.alt}
            size={size}
            className="ring-2 ring-white dark:ring-neutral-950"
          />
        ))}
      </div>
      {remaining > 0 && (
        <span
          className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-xs font-medium text-rose-600 ring-2 ring-white dark:ring-neutral-950"
          aria-label={`+${remaining} more`}
        >
          +{remaining}
        </span>
      )}
    </div>
  );
}
