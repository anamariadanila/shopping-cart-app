import { Container, Box, Flex, Text } from "@chakra-ui/react";
import Basket from "./components/Basket";
import ItemList from "./components/ItemList";

function App() {
  return (
    <Container centerContent>
      <Flex height="100vh" justify="center" align="center" flexDir="column">
        <Flex justify="flex-start" width="100%" flexDir="column" mb={10}>
          <Text fontSize="4xl" mb="5px">
            Checkout page
          </Text>
          <Box bg="#3290e7" width="75px" height="5px" />
        </Flex>
        <Flex flexDir="row">
          <ItemList />
          <Basket />
        </Flex>
      </Flex>
    </Container>
  );
}

export default App;
