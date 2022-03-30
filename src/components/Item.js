import { Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";

const Item = ({ item }) => {
  return (
    <Flex
      padding="6"
      boxShadow="lg"
      bg="white"
      flexDir="row"
      width="600px"
      height="fit-content"
      mt="15px"
      mr={5}
      align="center"
    >
      <Text>{item.name}</Text>
      <Spacer />
      <Text>Price: {item.price}</Text>
      <Button
        ml="10px"
        bg="#1bb43f"
        leftIcon={<RiShoppingCartLine />}
        color="#fff"
      >
        Add to cart
      </Button>
    </Flex>
  );
};

export default Item;
