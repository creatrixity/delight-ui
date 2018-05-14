import React from "react";
import {
  Flex,
  Box,
  Link,
  BlockLink,
  Icon,
  IconButton,
  OutlineButton,
  Text
} from "../UI";

const GlobalNav = props => {
  return (
    <Flex bg="red" mb={3}>
      <Flex width={1 / 3} pl={3} align="center">
        <IconButton
          name="menu"
          size={32}
          color="lightGray"
          borderColor="transparent"
        />
      </Flex>
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width={1 / 3}
        py={1}
      >
        <Text color="lightGray" bold>
          Delight
        </Text>
      </Flex>
      <Box width={1 / 3} pr={3} py={1}>
        <Flex align="center" justify="right">
          <IconButton
            name="carriage"
            color="lightGray"
            borderColor="transparent"
            size={32}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default GlobalNav;
