// Button.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "outline" | "filled";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "filled",
  className,
}) => {
  const buttonClass =
    variant === "outline"
      ? "border-2 border-white text-white hover:bg-white hover:text-black"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    href && (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-sm ${className}`}
      >
        {children}
      </a>
    )
  );
};
