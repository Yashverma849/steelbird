"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type CTAButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void | Promise<void>;
};

export default function CTAButton({
  href,
  children,
  className = "",
  variant = "primary",
  onClick,
}: CTAButtonProps) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    window.setTimeout(() => setPressed(false), 160);
  };

  const handleClick = async () => {
    handlePress();
    await onClick?.();
  };

  const classes = [
    "cta-button",
    variant === "ghost" ? "cta-button-ghost" : "",
    pressed ? "cta-button-pressed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} onClick={handlePress} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}
