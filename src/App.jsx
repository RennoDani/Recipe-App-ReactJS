import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import config from "./config";
import './App.css';

const App = () => {

  const APP_ID = config.api_id;
  const APP_KEY = config.api_key;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const url_req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  useEffect(() => {
    getRecipes();
    //console.log('run.....');
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(url_req);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            source={recipe.recipe.source}
            cuisineType={recipe.recipe.cuisineType}
          />
        ))}
      </div>

      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
}

export default App;
