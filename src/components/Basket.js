import { Flex, Text, CircularProgress, Box, Button } from "@chakra-ui/react";
import BasketTable from "./BaketTable";

const Basket = ({ loading, basketItems, removeFromCart }) => {
  return (
    <>
      <Flex
        width="500px"
        bg="#f0f3f8"
        mt="15px"
        border="1px #e1e5ee"
        padding={5}
        flexDirection="column"
      >
        {loading ? (
          <Flex align="center" justify="center" height="100%" width="100%">
            <CircularProgress isIndeterminate color="green.300" />
          </Flex>
        ) : (
          <>
            {basketItems.length === 0 ? (
              <Text
                fontSize="xl"
                color="#49576c"
                fontWeight="medium"
                size="300px"
              >
                No products in your shopping cart
              </Text>
            ) : (
              <>
                <Text
                  fontSize="xl"
                  color="#49576c"
                  fontWeight="medium"
                  size="300px"
                >
                  Products in your shopping cart
                </Text>
                <BasketTable
                  products={basketItems}
                  removeFromCart={removeFromCart}
                />
                <Box width="100%" height="2px" bg="#3b4a5f" />
                <Flex width="100%" justify="flex-end">
                  <Text
                    mt="5px"
                    fontSize="xl"
                    color="#49576c"
                    fontWeight="medium"
                  >
                    Total: 120
                  </Text>
                </Flex>
                <Button bg="#2fc152" color="#fff" mt={5} size="lg">
                  Continue
                </Button>
              </>
            )}
          </>
        )}
      </Flex>
    </>
  );
};

export default Basket;
