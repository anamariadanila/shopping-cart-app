import React from "react";
import { Flex } from "@chakra-ui/react";
import LoadingItems from "./LoadingItem";
import Item from "./Item";

import axios from "axios";

const fetchItems = async () => {
  const data = await axios
    .get(`http://private-32dcc-products72.apiary-mock.com/product`)
    .then((res) => res.data);

  //Added a 3 seconds delay to showcase the loading
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 3000);
  });
};

const ItemList = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        const data = await fetchItems();

        //Here we sort descending by price
        const formattedData = data.sort((a, b) => (a.price < b.price ? 1 : -1));

        setItems(formattedData);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Flex flexDir="column">
      {!!loading ? (
        <LoadingItems />
      ) : (
        items.map((product, index) => (
          <Item key={`${product.id}-${index}`} item={product} />
        ))
      )}
    </Flex>
  );
};

export default ItemList;
