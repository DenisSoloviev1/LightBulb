"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

export interface HourlyLoadData {
  hour: number;
  workday: number;
  weekend: number;
}

interface HourlyLoadTableProps {
  loadData: HourlyLoadData[];
  onLoadDataChange: (data: HourlyLoadData[]) => void;
}

export function HourlyLoadTable({ loadData, onLoadDataChange }: HourlyLoadTableProps) {
  const [editingField, setEditingField] = useState<{
    hour: number;
    field: keyof Omit<HourlyLoadData, "hour">;
  } | null>(null);

  const handleLoadChange = (
    hour: number,
    field: keyof Omit<HourlyLoadData, "hour">,
    value: string
  ) => {
    const newData = loadData.map((item) =>
      item.hour === hour
        ? { ...item, [field]: value === "" ? 0 : Math.max(0, Number(value)) }
        : item
    );
    onLoadDataChange(newData);
  };

  const handleFocus = (
    hour: number,
    field: keyof Omit<HourlyLoadData, "hour">
  ) => {
    setEditingField({ hour, field });
    // Если значение равно 0, очищаем поле при фокусе
    if (loadData.find((item) => item.hour === hour)?.[field] === 0) {
      const newData = loadData.map((item) =>
        item.hour === hour ? { ...item, [field]: 0 } : item
      );
      onLoadDataChange(newData);
    }
  };

  const handleBlur = () => {
    setEditingField(null);
  };

  const getDisplayValue = (hour: number, field: keyof Omit<HourlyLoadData, "hour">) => {
    const value = loadData.find((item) => item.hour === hour)?.[field];
    const isEditing = editingField?.hour === hour && editingField?.field === field;
    
    // Если редактируем и значение 0, показываем пустую строку
    if (isEditing && value === 0) {
      return "";
    }
    return value?.toString() ?? "";
  };

  return (
    <div className={styles.loadTableContainer}>
      <h3 className={styles.tableTitle}>
        Индивидуальный характер нагрузки по часам суток
      </h3>

      <div className={styles.scrollTable}>
        <table className={styles.loadTable}>
          <thead>
            <tr>
              <th>Час</th>
              <th>Рабочий день <br/>кВт*ч</th>
              <th>Выходной день <br/>кВт*ч</th>
            </tr>
          </thead>
          <tbody>
            {loadData.map((row) => (
              <tr key={row.hour}>
                <td>{row.hour}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    value={getDisplayValue(row.hour, "workday")}
                    onChange={(e) =>
                      handleLoadChange(row.hour, "workday", e.target.value)
                    }
                    onFocus={() => handleFocus(row.hour, "workday")}
                    onBlur={handleBlur}
                    className={styles.loadInput}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    value={getDisplayValue(row.hour, "weekend")}
                    onChange={(e) =>
                      handleLoadChange(row.hour, "weekend", e.target.value)
                    }
                    onFocus={() => handleFocus(row.hour, "weekend")}
                    onBlur={handleBlur}
                    className={styles.loadInput}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}