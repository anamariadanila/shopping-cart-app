import { Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";

const Item = ({ item, addToCart }) => {
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
      <Text fontWeight="bold" fontSize="xl" fontFamily="heading">
        {item.name}
      </Text>
      <Spacer />
      <Text mr="5px" fontWeight="bold">
        Price:
      </Text>
      <Text color="#3290e7" fontWeight="bold">
        ${item.price}
      </Text>
      <Button
        ml="10px"
        bg="#1bb43f"
        leftIcon={<RiShoppingCartLine />}
        color="#fff"
        onClick={() => addToCart(item.id)}
      >
        Add to cart
      </Button>
    </Flex>
  );
};

export default Item;
