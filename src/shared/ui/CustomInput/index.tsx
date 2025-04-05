"use client";

import { forwardRef, useState } from "react";
import styles from "./styles.module.scss";
import { EyeOffSvg, EyeSvg } from "@/shared/icon";

interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, error, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={styles.customInput} data-error={error}>
        <label>{label}</label>

        <div className={styles.inputContainer}>
          {type === "password" ? (
            <>
              <input
                type={showPassword ? "text" : "password"}
                onChange={onChange}
                ref={ref}
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
            <input type={type} onChange={onChange} ref={ref} {...props} />
          )}
        </div>

        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput"; // Добавляем displayName для удобства отладки
