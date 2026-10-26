import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

/**
 * Ví dụ Button dùng CSS Module kết hợp với clsx để ghép class
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        styles.btn,
        styles[variant],
        styles[size],
        { [styles.disabled]: disabled },
        className // Cho phép người dùng truyền thêm class từ ngoài vào
      )}
      {...props}
    >
      {children}
    </button>
  );
}
