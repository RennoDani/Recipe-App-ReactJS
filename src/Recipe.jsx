import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, source, cuisineType }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>            
            <ul className={style.ingredientList}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}                
            </ul>      
                  
            {/* <p>Calories:{calories}</p> */}
            <img className={style.image} src={image} alt="" />

            <p>Cuisine: {cuisineType}</p>
            {/* <p>Source: {source}</p> */}
        </div>
    )
}

export default Recipe;