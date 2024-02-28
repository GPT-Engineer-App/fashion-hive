import React from "react";
import { Box, Flex, Grid, Heading, Text, Button, Image, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaUserAlt, FaHeart } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.900");

  // mock data for products
  const products = [
    {
      id: 1,
      name: "Casual T-Shirt",
      price: "$29.99",
      imageUrl: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjB0LXNoaXJ0fGVufDB8fHx8MTcwOTEyMTI4NXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 2,
      name: "Formal Suit",
      price: "$199.99",
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBzdWl0fGVufDB8fHx8MTcwOTEyMTI4NXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 3,
      name: "Summer Dress",
      price: "$49.99",
      imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzc3xlbnwwfHx8fDE3MDkxMjEyODV8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    // ... add more products as needed
  ];

  return (
    <Box bg={bgColor} minH="100vh">
      <Flex as="header" align="center" justify="space-between" p="4" borderBottomWidth="1px" borderBottomColor={useColorModeValue("gray.200", "gray.600")}>
        <Heading as="h1" size="lg" letterSpacing="tighter">
          BrandName
        </Heading>

        <HStack spacing="4">
          <Icon as={FaSearch} w="5" h="5" />
          <Icon as={FaHeart} w="5" h="5" />
          <Icon as={FaShoppingCart} w="5" h="5" />
          <Icon as={FaUserAlt} w="5" h="5" />
        </HStack>
      </Flex>

      <Box as="main" p="4">
        <VStack spacing="8">
          <Heading as="h2" size="xl" letterSpacing="tight" textAlign="center">
            Latest Collections
          </Heading>
          <Text fontSize="lg" color={textColor} textAlign="center">
            Explore our newest arrivals and hottest trends.
          </Text>
        </VStack>

        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="6" mt="8">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.imageUrl} alt={product.name} />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" textTransform="uppercase" fontSize="sm" color="teal.600">
                    New
                  </Text>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {product.name}
                </Box>
                <Box>{product.price}</Box>
                <Button mt="3" colorScheme="teal" size="sm">
                  Add to cart
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
