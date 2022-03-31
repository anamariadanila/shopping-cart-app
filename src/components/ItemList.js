import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((product, index) => (
        <Item key={`${product.id}-${index}`} item={product} />
      ))}
    </>
  );
};

export default ItemList;
