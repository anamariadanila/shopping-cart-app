import { Flex, Text } from "@chakra-ui/react";

const Basket = () => {
  return (
    <Flex width="500px" bg="#f0f3f8" mt="15px" border="1px #e1e5ee" padding={5}>
      <Text fontSize="xl" color="#49576c">
        No products in your shopping cart
      </Text>
    </Flex>
  );
};

export default Basket;
