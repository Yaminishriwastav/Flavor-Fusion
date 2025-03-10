import { useAuth } from "../../Context/AuthProvider";
import { Button, Flex, Heading, HStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { PiChefHatDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Flex
      fontWeight="bolder"
      borderRadius="10px"
      justifyContent="space-between"
      alignItems="center"
      color="blue.600"
      bg="blue.50"
      m={4}
      p={4}
      boxShadow="md"
    >
      {/* Logo Section */}
      <Flex align="center">
        <PiChefHatDuotone fontSize="2rem" color="#FF6347" />
        <Text fontWeight="bold" fontSize="2xl" ml={2} color="blue.700">
          🍽️ Flavor Fusion
        </Text>
      </Flex>

      {/* Navigation Links */}
      <HStack gap={6} fontSize="lg">
        <ChakraLink as={Link} to="/" _hover={{ textDecoration: "underline", color: "blue.400" }}>
          🏡 Home
        </ChakraLink>
        <ChakraLink as={Link} to="/about" _hover={{ textDecoration: "underline", color: "blue.400" }}>
          ℹ️ About
        </ChakraLink>
      </HStack>

      {/* User Section */}
      <Heading fontSize="lg">
        {user ? (
          <Flex align="center">
            <Text as="span" mr={3} fontWeight="bold">
              👋 Hey, {user.name}!
            </Text>
            <Button
              bg="red.400"
              color="white"
              _hover={{ bg: "red.500" }}
              onClick={handleLogout}
              size="sm"
            >
              🚪 Logout
            </Button>
          </Flex>
        ) : (
          <Link to="/login">
            <Button bg="blue.400" color="white" _hover={{ bg: "blue.500" }} size="sm">
              👤 Login
            </Button>
          </Link>
        )}
      </Heading>
    </Flex>
  );
};

export default Navbar;
