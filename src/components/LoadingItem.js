import { Flex, Skeleton } from "@chakra-ui/react";

const LoadingItems = () => {
  return (
    <>
      {[...Array(4)].map((e, i) => (
        <Flex
          padding="6"
          boxShadow="lg"
          bg="white"
          flexDir="row"
          width="600px"
          height="fit-content"
          mt="15px"
          mr={5}
          key={i}
        >
          <Skeleton spacing="4" width="100%" height="20px" />
        </Flex>
      ))}
    </>
  );
};

export default LoadingItems;
