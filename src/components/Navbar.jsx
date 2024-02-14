import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Button, TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div>
      <TextField
        variant="filled"
        label="Search"
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <Button
        sx={{ width: "fit-content", padding: "0.25rem", borderRadius: "10rem" }}
        disableElevation
        onClick={handleSubmit}
      >
        <IoIosSearch size={24} />
      </Button>
    </div>
  );
};

export default Navbar;
