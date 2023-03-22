import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./CreateItems.module.css";

export default function CreateItems({ itemName, amount, onChange, onCreate }) {
  return (
    <header className={styles.header}>
      <input
        name="itemName"
        placeholder="장볼것!!"
        value={itemName}
        onChange={onChange}
      />
      <input
        name="amount"
        placeholder="몇개?"
        value={amount}
        onChange={onChange}
      />
      <button className={styles.btnHover} onClick={() => onCreate(uuidv4())}>
        ADD
      </button>
    </header>
  );
}
