import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { Grid } from "@mui/material";
import { GlobalContext } from "../context";

const HomePage = () => {
  const { recipes } = useContext(GlobalContext);
  console.log(recipes);

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
