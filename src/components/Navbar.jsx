import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Button } from "@mui/material";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div>
      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <Button variant="contained" disableElevation onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Navbar;
