import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipes(data?.data?.recipes);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, recipes, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
