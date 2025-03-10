import { Box, Button, Input, Textarea, VStack, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [video, setVideo] = useState("");

  const handleSubmit = () => {
    if (!name || !image || !ingredients || !instructions) {
      window.alert("❌ Please fill all required fields before saving.");
      return;
    }

    const newRecipe = {
      idMeal: Date.now().toString(),
      strMeal: name,
      strMealThumb: image,
      strIngredient: ingredients,
      strInstructions: instructions,
      strYoutube: video,
      strArea: "Custom",
    };

    addRecipe(newRecipe);

    window.alert("✅ Recipe added successfully!");

    setIsOpen(false);
    setName("");
    setImage("");
    setIngredients("");
    setInstructions("");
    setVideo("");
  };

  return (
    <Box textAlign="center">
      {!isOpen ? (
        <Button
          fontSize="lg"
          padding="12px 24px"
          bg="blue.600"
          color="white"
          _hover={{ bg: "blue.700" }}
          onClick={() => setIsOpen(true)}
          ml={4}
        >
          + Add Recipe
        </Button>
      ) : (
        <Flex 
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)" 
          justify="center"
          align="center"
          zIndex="1000"
        >
          <Box
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="2xl"
            maxW="500px"
            width="90%"
            textAlign="center"
          >
            <Heading size="md" mb={4} color="blue.700">
              Add a New Recipe 🍽️
            </Heading>
            <VStack spacing={3}>
              <Input
                fontSize="md"
                placeholder="Recipe Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="white"
                border="2px solid"
                borderColor="blue.400"
                _focus={{ borderColor: "blue.600", boxShadow: "xl" }}
              />
              <Input
                fontSize="md"
                placeholder="Image URL*"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                bg="white"
                border="2px solid"
                borderColor="blue.400"
                _focus={{ borderColor: "blue.600", boxShadow: "xl" }}
              />
              <Textarea
                fontSize="md"
                placeholder="Ingredients* (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                bg="white"
                border="2px solid"
                borderColor="green.400"
                _focus={{ borderColor: "green.600", boxShadow: "xl" }}
              />
              <Textarea
                fontSize="md"
                placeholder="Instructions*"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                bg="white"
                border="2px solid"
                borderColor="purple.400"
                _focus={{ borderColor: "purple.600", boxShadow: "xl" }}
              />
              <Input
                fontSize="md"
                placeholder="YouTube Video Link (Optional)"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
                bg="white"
                border="2px solid"
                borderColor="red.400"
                _focus={{ borderColor: "red.600", boxShadow: "xl" }}
              />
              <Button
                fontSize="md"
                padding="10px 20px"
                bg="green.500"
                color="white"
                _hover={{ bg: "green.600" }}
                onClick={handleSubmit}
              >
                ✅ Save Recipe
              </Button>
              <Button
                fontSize="md"
                padding="10px 20px"
                bg="red.500"
                color="white"
                _hover={{ bg: "red.600" }}
                onClick={() => setIsOpen(false)}
              >
                ❌ Cancel
              </Button>
            </VStack>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default AddRecipeForm;
