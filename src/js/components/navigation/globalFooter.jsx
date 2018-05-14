import React from "react";
import { Flex, Box, Link, BlockLink, OutlineButton, Text, Icon } from "../UI";

const GlobalFooter = props => {
  return (
    <Flex bg="lightGray" px={3}>
      <Box width={1 / 3}>
        <BlockLink href="http://delight.io/profile">
          <Flex align="center" justify="center" py={3}>
            <Icon name="home" size={32} color="black" />
          </Flex>
        </BlockLink>
      </Box>
      <Box width={1 / 3}>
        <BlockLink href="http://delight.io/profile">
          <Flex align="center" justify="center" py={3}>
            <Icon name="carriage" size={32} color="gray" />
          </Flex>
        </BlockLink>
      </Box>
      <Box width={1 / 3}>
        <BlockLink href="http://delight.io/profile">
          <Flex align="center" justify="center" py={3}>
            <Icon name="user" size={32} color="gray" />
          </Flex>
        </BlockLink>
      </Box>
    </Flex>
  );
};

export default GlobalFooter;
