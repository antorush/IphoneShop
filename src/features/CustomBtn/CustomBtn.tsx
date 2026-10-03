import React from "react";

export type TButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type TButtonSize = "sm" | "md" | "lg";

export interface ICustomBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  size?: TButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const variantStyles: Record<TButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300",
  secondary:
    "bg-gray-800 text-white hover:bg-gray-900 active:bg-black disabled:bg-gray-400",
  outline:
    "border border-gray-300 text-gray-800 bg-transparent hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200",
  ghost:
    "bg-transparent text-gray-800 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-300",
};

const sizeStyles: Record<TButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-lg gap-2.5",
};

const CustomBtn: React.FC<ICustomBtn> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = "",
  children,
  type = "button",
  ...rest
}) => {
  const isDisabled = disabled || isLoading;

  const classes = [
    // базовые стили
    "inline-flex items-center justify-center rounded-lg font-medium",
    "transition-colors duration-200 cursor-pointer",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
    "disabled:cursor-not-allowed",
    // варианты и размеры
    variantStyles[variant],
    sizeStyles[size],
    // растянуть на всю ширину
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && (
            <span className="inline-flex shrink-0">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
};

const Spinner: React.FC = () => (
  <svg
    className="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

export default CustomBtn;
