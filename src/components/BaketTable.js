import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
  Tooltip,
  Select,
  Button,
} from "@chakra-ui/react";

const BasketTable = ({ products, removeFromCart }) => {
  return (
    <TableContainer mt={5}>
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th textTransform="none">Product</Th>
            <Th textTransform="none">Quantity</Th>
            <Th textTransform="none">Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td>
                <Flex flexDir="row" align="center">
                  <Text mr={2}> {product.name}</Text>
                  <Tooltip label={product.description} placement="right">
                    <FaInfoCircle />
                  </Tooltip>
                </Flex>
              </Td>
              <Td>
                <Select>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </Select>
              </Td>
              <Td>{product.price}</Td>
              <Td padding="0px">
                <Button
                  variant="link"
                  size="lg"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdOutlineRemoveShoppingCart />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BasketTable;
