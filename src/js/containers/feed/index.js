import React from "react";
import { Flex, Text, Button, Box, Icon, IconButton } from "../../components/UI";

class Feed extends React.PureComponent {
  items = [
    {
      id: 1,
      title: "Cheese Hamburger",
      price: "$2.99",
      description: "Cheese Hamburgers are delectable"
    },
    {
      id: 2,
      title: "Sauerkraut",
      price: "$4.95",
      description: "Sauerkrauts are Nordic delicatessens"
    }
  ];

  render() {
    let items = this.items.map(item => (
      <Box width={1} mb={3} key={item.id}>
        <Flex>
          <Box width={1 / 4} mr={3} bg="lightGray">
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              py={4}
            >
              <Text fontSize={0} italic>
                Image
              </Text>
            </Flex>
          </Box>

          <Box width={1 / 2}>
            <Text bold={true} mb={1}>
              {item.title}
            </Text>
            <Text color="green" fontSize={0}>
              {item.price}
            </Text>
          </Box>

          <Box ml="auto">
            <IconButton
              size={32}
              color="gray"
              borderColor="lightGray"
              name="plus"
            />
          </Box>
        </Flex>
      </Box>
    ));

    return (
      <Flex width={1} flexDirection="column">
        {items}
      </Flex>
    );
  }
}

export default Feed;
