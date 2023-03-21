import React from "react";
import { GoTrashcan } from "react-icons/go";

const Items = ({ props, onToggle, onRemove }) => {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: props.active ? "blue" : "black" }}
        onClick={() => onToggle(props.id)}
      >
        {props.itemName}
      </b>
      <span>{props.amount}</span>
      <button onClick={() => onRemove(props.id)}>
        <GoTrashcan />
      </button>
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
