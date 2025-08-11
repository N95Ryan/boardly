import React from "react";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  className?: string;
};

// Simple circular avatar. Falls back to initials if no image.
export default function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  className = "",
}: AvatarProps) {
  const sizeClass =
    size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-8 w-8";
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 ${sizeClass} ${className}`}
      aria-label={alt}
      title={alt}
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
