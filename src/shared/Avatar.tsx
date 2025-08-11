import React from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
  className?: string;
};

// Simple circular avatar. Falls back to initials if no image.
export default function Avatar({
  src,
  alt = "",
  initials,
  size = 32,
  className = "",
}: AvatarProps) {
  const dimension = `${size}px`;
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 ${className}`}
      style={{ width: dimension, height: dimension }}
      aria-label={alt}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="text-xs font-medium">{initials}</span>
      )}
    </div>
  );
}
