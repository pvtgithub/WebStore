import React, { useState } from "react";

function About() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ]);

  const handleRemoveItem = id => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default About;