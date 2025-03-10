  import { Box, Button, Container, Grid, GridItem, Heading, HStack, Image, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useContext, useState } from "react";
  import { Link } from "react-router-dom";
  import { RecipeContext } from "../Context/RecipeProvider";
  import SearchBar from "./SearchBar";
  import AddRecipeForm from "./AddRecipesForm";
  
  const Home = () => {
    const { filteredRecipes, setFilteredRecipes } = useContext(RecipeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedIngredient, setSelectedIngredient] = useState("");
  
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
  
    const categories = [
      { emoji: "🍞", name: "Side" },
      { emoji: "🦞", name: "Seafood" },
      { emoji: "🥗", name: "Vegetarian" },
      { emoji: "🥩", name: "Beef" },
      { emoji: "🐖", name: "Pork" },
      { emoji: "🍝", name: "Pasta" },
      { emoji: "🍰", name: "Dessert" },
      { emoji: "🍗", name: "Lamb" },
      { emoji: "🍗", name: "Chicken" },
      
    ];
  
    const keyIngredient = [
      { emoji: "🍞", name: "Bread" },
      { emoji: "🍶", name: "SoySauce" },
      { emoji: "🧅", name: "Onion" },
      { emoji: "🍛", name: "Lentils" },
      { emoji: "🥕", name: "Carrots" },
      { emoji: "🧀", name: "Cheese" },
      { emoji: "🥔", name: "Potatoes" },
      { emoji: "🧂 ", name: "Cumin" },
      { emoji: "🥚", name: "Eggs" },
    ];
  
    const applyFilter = async () => {
      try {
        let apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
        let queryParams = [];
  
        if (selectedCategory) queryParams.push(`c=${encodeURIComponent(selectedCategory)}`);
        if (selectedIngredient) queryParams.push(`i=${encodeURIComponent(selectedIngredient)}`);
  
        if (queryParams.length > 0) {
          apiUrl += queryParams.join("&");
        }
  
        console.log("Final API URL:", apiUrl);
  
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);
  
        if (response.data.meals) {
          setFilteredRecipes(response.data.meals);
        } else {
          console.warn("No recipes found for the selected filters.");
          setFilteredRecipes([]);
        }
      } catch (err) {
        console.error("Error fetching filtered recipes:", err);
        setFilteredRecipes([]);
      }
  
      onClose();
    };
  
    const handleAddRecipe = (newRecipe) => {
      setFilteredRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
    };
  
    return (
      <Container>
        <HStack gap={3}>
          <SearchBar />
          <Button color="blue.600" bg="blue.200" onClick={isOpen ? onClose : onOpen} my={4} marginRight="10px">
            {isOpen ? "Hide Filter" : "Show Filter"}
          </Button>
          <AddRecipeForm addRecipe={handleAddRecipe} />
        </HStack>
  
        {isOpen && (
          <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="blue.50"
            p={6}
            boxShadow="lg"
            borderRadius="12px"
            zIndex={10}
            width="600px"
          >
            <Heading textAlign="center" color="blue.600">
              Filter Selection
            </Heading>
            <Text textAlign="start" color="blue.500">Categories</Text>
            <HStack wrap="wrap">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  color={selectedCategory === category.name ? "blue.400" : "grey"}
                  m={2}
                  bg="blue.200"
                >
                  {category.emoji} {category.name}
                </Button>
              ))}
            </HStack>
            <Text textAlign="start" color="blue.500">Ingredients</Text>
            <HStack wrap="wrap">
              {keyIngredient.map((ingredient) => (
                <Button
                  key={ingredient.name}
                  onClick={() => setSelectedIngredient(ingredient.name)}
                  color={selectedIngredient === ingredient.name ? "blue.400" : "grey"}
                  m={2}
                  bg="blue.200"
                >
                  {ingredient.emoji} {ingredient.name}
                </Button>
              ))}
            </HStack>
            <Button m={4} onClick={applyFilter} color="blue.500" bg="blue.200">
              Apply Filter
            </Button>
            <Button m={4} onClick={onClose} bg="blue.200" color="blue.500">
              Close
            </Button>
          </Box>
        )}
  
        <Grid templateColumns="repeat(4, 1fr)" gap={8} m={6} p={6}>
          {filteredRecipes.length === 0 ? (
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={5} />
              <Skeleton height="200px" />
            </HStack>
          ) : (
            filteredRecipes.map((meal) => (
              <GridItem key={meal.idMeal} borderRadius="2xl" bg="blue.100" textAlign="left" color="blue.500">
                <Link to={`/meal/${meal.idMeal}`}>
                  <Image src={meal.strMealThumb} alt="meal-pic" borderRadius="8px" />
                  <Text paddingLeft={6} paddingTop={3} fontWeight="bold">
                    {meal.strMeal}
                  </Text>
                  <Text paddingLeft={6} paddingBottom={3}>
                    {meal.strArea}
                  </Text>
                </Link>
              </GridItem>
            ))
          )}
        </Grid>
      </Container>
    );
  };
  
  export default Home;
  