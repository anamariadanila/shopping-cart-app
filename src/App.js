import { Container, Box, Flex, Text } from "@chakra-ui/react";
import Basket from "./components/Basket";
import ItemList from "./components/ItemList";
import { Select } from "@chakra-ui/react";
import LoadingItems from "./components/LoadingItem";

import Item from "./components/Item";

import React from "react";

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
function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
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

  const addToCart = (id) => {
    const item = items.find((el) => (el.id = id));

    setItems(items.filter((el) => el !== item));
    setBasketItems([...basketItems, item]);
  };

  const removeFromCart = (id) => {
    const item = basketItems.find((el) => (el.id = id));

    setBasketItems(basketItems.filter((el) => el !== item));
    setItems([...items, item]);
  };

  return (
    <Container centerContent>
      <Flex height="100vh" justify="center" align="center" flexDir="column">
        <Flex justify="flex-start" width="100%" flexDir="column" mb={10}>
          <Flex flexDir="row" align="center" justify="space-between">
            <Text fontSize="4xl" mb="5px">
              Checkout page
            </Text>
            <Select placeholder="Change currency" width="200px">
              <option value="usd">USD</option>
              <option value="euro">EURO</option>
              <option value="gbp">GBP</option>
            </Select>
          </Flex>

          <Box bg="#3290e7" width="75px" height="5px" />
        </Flex>
        <Flex flexDir="row">
          <Flex flexDir="column">
            {!!loading ? (
              <LoadingItems />
            ) : (
              items.map((product, index) => (
                <Item
                  key={`${product.id}-${index}`}
                  item={product}
                  addToCart={addToCart}
                />
              ))
            )}
          </Flex>
          <Basket
            loading={loading}
            basketItems={basketItems}
            removeFromCart={removeFromCart}
          />
        </Flex>
      </Flex>
    </Container>
  );
}

export default App;
