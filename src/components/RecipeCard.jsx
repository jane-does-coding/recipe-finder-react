import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const RecipeCard = ({ title, img }) => {
  return (
    <div>
      <Paper
        sx={{
          boxShadow: "none",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: "0.5rem",
            right: "0.75rem",
            backgroundColor: "rgba(33, 33, 33, 0.6)",
            color: "whitesmoke",
            transition: "0.15s",
          }}
          className="remove-hover"
        >
          <GoHeart />
        </IconButton>
        <img className="recipe-image" src={img} alt="" />
        <Typography fontSize={"1rem"}>{title}</Typography>
      </Paper>
    </div>
  );
};

export default RecipeCard;
