"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { Option } from "@/shared/types";
import { VoltageLevel } from "@/entities/calculator";

export const CustomSelect: React.FC<{
  options: Option[];
  label: string;
  value?: number | string | VoltageLevel;
  error?: string;
  onChange: (value: number | string | VoltageLevel) => void;
}> = ({ options, label, value, error, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Находим опцию по значению value
  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <label>{label}</label>

      <div
        className={`${styles.selectWrap} ${isOpen ? styles.active : ""}`}
        ref={selectRef}
      >
        <div className={styles.defaultOption} onClick={toggleSelect}>
          {selectedOption ? (
            <span>{selectedOption.name}</span>
          ) : (
            <span className={styles.placeholder}>выберите значение</span>
          )}
          <div className={styles.arrow} />
        </div>

        {isOpen && (
          <ul className={styles.optionsList}>
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className={styles.optionItem}
              >
                <span>{option.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};