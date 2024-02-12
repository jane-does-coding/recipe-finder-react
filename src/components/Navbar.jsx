import React, { useContext } from "react";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { searchParam, setSearchParam } = useContext(GlobalContext);

  return (
    <div>
      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
