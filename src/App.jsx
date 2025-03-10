import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Common/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Recipe from './Pages/Recipes';
import Login from './Pages/Common/Login';
import AddRecipeForm from './Pages/AddRecipesForm';

function App() {
    const [recipes, setRecipes] = useState([]); 

    const addRecipe = (newRecipe) => {
      setRecipes([...recipes, newRecipe]); 
    };

  return (
    <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/meal/:id' element={<Recipe/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/add-recipe' element={<AddRecipeForm addRecipe={addRecipe} />} />
       
      </Routes> 
    </>
  )
}

export default App;
