import React from "react";

import { cn } from "@/lib/cn";

export type SkeletonType = "text" | "circular" | "rectangular" | "rounded";
type AnimationType = "pulse" | false;

type SkeletonProps = {
  variant?: SkeletonType;
  animation?: AnimationType;
  width?: number | string;
  height?: number | string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Skelton({
  variant = "rectangular",
  animation = "pulse",
  width,
  height,
  className,
  ...props
}: SkeletonProps) {
  // Base styles without animation
  const baseStyles = "bg-zinc-500";

  // Animation styles
  const animationStyles = {
    pulse: "animate-pulse",
    false: "", // No animation
  };

  // Variant-specific styles
  const variantStyles = {
    circular: "rounded-full",
    rectangular: "",
    rounded: "rounded-md",
    text: "rounded-sm",
  };

  // Apply inline styles for dynamic width and height
  const inlineStyles = {
    width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : "100%",
    height: height !== undefined ? (typeof height === "number" ? `${height}px` : height) : variant === "text" ? "1rem" : "2.5rem",
  };

  return (
    <div
      className={cn(
        baseStyles,
        animation !== false && animationStyles[animation],
        variantStyles[variant],
        className,
      )}
      style={inlineStyles}
      {...props}
    />
  );
}
