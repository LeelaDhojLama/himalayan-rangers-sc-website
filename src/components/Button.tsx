import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const buttonClasses = clsx(
      "inline-flex items-center justify-center font-semibold rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
      {
        // Variants
        "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600":
          variant === "primary",
        "bg-gray-600 text-white hover:bg-gray-700 focus-visible:outline-gray-600":
          variant === "secondary",
        "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-blue-600":
          variant === "outline",
        "text-gray-900 hover:bg-gray-100 focus-visible:outline-blue-600":
          variant === "ghost",

        // Sizes
        "px-2.5 py-1.5 text-sm": size === "sm",
        "px-3.5 py-2.5 text-sm": size === "md",
        "px-4 py-3 text-base": size === "lg",

        // Full width
        "w-full": fullWidth,
      },
      className
    );

    if (
      asChild &&
      typeof children === "object" &&
      children !== null &&
      "props" in children
    ) {
      return children;
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
