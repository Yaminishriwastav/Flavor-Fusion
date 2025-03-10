import React from "react";
import { Box, Heading, Text, Image, VStack, Flex } from "@chakra-ui/react";
import aboutImage from "../assets/About.png"; 

const About = () => {
  return (
    <Box maxW="800px" mx="auto" p={6} textAlign="center">
      <Image 
        src={aboutImage} 
        alt="Cooking Image" 
        borderRadius="2xl" 
        mb={4}
        p={'10px'}
        width={'90%'} 
        height={'400px'}
      />
      <VStack spacing={4}>
        <Heading as="h1" size="xl" color="blue.500">
          🍽️ About <span style={{ color: "#FF6347" }}>Flavor Fusion</span> 🎨
        </Heading>
        <Text fontSize="lg">
          Welcome to <strong>Flavor Fusion</strong>! 🌍✨ Your ultimate destination to explore mouthwatering recipes from around the world. Whether you're a home cook or a professional chef, there's always something delicious waiting for you! 🍜🥗
        </Text>
        <Text fontSize="md">
          Discover, experiment, and fall in love with the art of cooking. 🧑‍🍳❤️ Search for your favorite meals, filter recipes based on categories, and bring new flavors to your table effortlessly.
        </Text>
        <Text fontSize="md" fontWeight="bold" color="blue.600">
          "Cooking is an art, and every meal is a masterpiece! 🎨🍲"
        </Text>
      </VStack>
      <VStack textAlign={'center'} m={6} p={2} color={'gray.600'}>
        <Flex justifyContent="center" alignItems="center">
          <Text fontSize="lg">Crafted with 💖 and 🍀 by the <span style={{ color: "#FF4500", fontWeight: "bold" }}>Flavor Fusion</span> Team</Text>
        </Flex>
        <Text fontSize="md" fontWeight="bold" color="teal.500">
          &copy; {new Date().getFullYear()} | 🍽️ <span style={{ color: "#FF6347" }}>Savor Every Bite</span> 🌟
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
