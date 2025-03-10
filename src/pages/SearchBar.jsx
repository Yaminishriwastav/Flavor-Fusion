import { Container, Input, Button, HStack } from "@chakra-ui/react";
import { RecipeContext } from "../Context/RecipeProvider";
import React, { useContext, useState } from "react";

const SearchBar = () => {
  const { recipes, setFilteredRecipes } = useContext(RecipeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(filtered.length > 0 ? filtered : []);
    }
  };

  return (
    <Container>
      <HStack spacing={2} width="80%" margin="auto">
        <Input
          placeholder="Search Meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          width="70%"
          borderRadius="2xl"
        />
        <Button color="blue" bg="skyblue" onClick={handleSearchClick} borderRadius="2xl">
          Search
        </Button>
      </HStack>
    </Container>
  );
};

export default SearchBar;
