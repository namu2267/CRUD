import React, { useState } from "react";
import ItemList from "./components/ItemList";
import CreateItems from "./components/CreateItems/CreateItems";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    itemName: "",
    amount: "",
  });

  const { itemName, amount } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = (id) => {
    const item = {
      id,
      itemName,
      amount,
    };
    setItems([...items, item]);
    setInputs({ itemName: "", amount: "" });
  };

  const [items, setItems] = useState([
    {
      id: "1",
      itemName: "우유",
      amount: "1개",
      active: true,
    },
    {
      id: "2",
      itemName: "망고",
      amount: "2개",
      active: true,
    },
  ]);

  const onToggle = (id) => {
    setItems(items.map((a) => (a.id === id ? { ...a, active: !a.active } : a)));
  };

  const onRemove = (id) => {
    setItems(items.filter((a) => a.id !== id));
  };

  return (
    <div className="container">
      <CreateItems
        itemName={itemName}
        amount={amount}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ItemList items={items} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;
