import React from "react";
import { GoTrashcan } from "react-icons/go";
import styles from "./ItemList.module.css";

const Items = ({ props, onToggle, onRemove }) => {
  return (
    <div>
      <div className={styles.container}>
        <b
          style={{
            cursor: "pointer",
            textDecorationLine: props.active ? "line-through" : "none",
          }}
          onClick={() => onToggle(props.id)}
        >
          {props.itemName}
        </b>

        <span>{props.amount}</span>
        <button
          className={styles.trashButton}
          onClick={() => onRemove(props.id)}
        >
          <GoTrashcan />
        </button>
      </div>
    </div>
  );
};

export default function ItemList({ items, onToggle, onRemove }) {
  return (
    <div>
      {items.map((a) => (
        <Items props={a} key={a.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
}
