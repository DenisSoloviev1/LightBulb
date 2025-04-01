"use client";

import { forwardRef, useState } from "react";
import styles from "./styles.module.scss";
import { EyeOffSvg, EyeSvg } from "@/shared/icon";

interface InputProps {
  label: string;
  error?: string;
  type?: string;
}

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ label, error, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.customInput} data-error={error}>
      <label>{label}</label>

      <div className={styles.inputContainer}>
        {type === "textarea" ? (
          <textarea ref={ref as React.Ref<HTMLTextAreaElement>} {...props} />
        ) : type === "password" ? (
          <>
            <input
              type={showPassword ? "text" : "password"}
              ref={ref as React.Ref<HTMLInputElement>}
              {...props}
            />

            <button
              type="button"
              className={styles.showPasswordButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffSvg /> : <EyeSvg />}
            </button>
          </>
        ) : (
          <input
            type={type}
            ref={ref as React.Ref<HTMLInputElement>}
            {...props}
          />
        )}
      </div>

      {error && <span>{error}</span>}
    </div>
  );
});
