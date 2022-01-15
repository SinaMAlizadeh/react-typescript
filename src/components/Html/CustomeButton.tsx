import React from "react";

type ButtonProps = {
  variant: "primary" | "secendry";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function CustomeButton({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`${variant}`} {...rest}>
      children
    </button>
  );
}

export default CustomeButton;
