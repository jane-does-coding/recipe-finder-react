import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Button, Stack, TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      gap={"1rem"}
      justifyContent={"center"}
    >
      <TextField
        variant="filled"
        label="Search"
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        sx={{ minWidth: "20rem" }}
      />
      <Button
        sx={{ width: "fit-content", padding: "0.75rem", borderRadius: "10rem" }}
        disableElevation
        onClick={handleSubmit}
      >
        <IoIosSearch size={24} />
      </Button>
    </Stack>
  );
};

export default Navbar;
