import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { Grid } from "@mui/material";
import { GlobalContext } from "../context";

const HomePage = () => {
  const { recipes, searchParam } = useContext(GlobalContext);
  console.log(recipes);

  if (recipes.length < 1) return <h1>Please search up something</h1>;

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          title={recipe.title}
          img={recipe.image_url}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

export default HomePage;
