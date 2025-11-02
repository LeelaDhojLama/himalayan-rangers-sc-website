import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  variant = "default",
  padding = "md",
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg transition-shadow",
        {
          "bg-white shadow-sm": variant === "default",
          "bg-white shadow-lg hover:shadow-xl": variant === "elevated",
          "bg-white border border-gray-200": variant === "outlined",
          "p-0": padding === "none",
          "p-4": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
