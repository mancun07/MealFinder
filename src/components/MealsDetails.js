import React, {useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import { MealsContext } from '../context/MealsContext';

const MealsDetails = (props) => {
    const {fetchSingleMeal, meal} = useContext(MealsContext);
    console.log(props)
    const {id} = useParams('id');
    console.log(id)
    console.log(meal)
    useEffect(() => {
        fetchSingleMeal(id);
    }, [])

    let ingredients = [];


    for (let i=1; i<=20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        }
    }
    console.log(ingredients)


    return (
        <div class="single-meal my-4">
            <Link to={'/'} className="back btn btn-circle bg-dark inline-block my-4">Назад к результатам поиска</Link><br/>
            <img src={meal.strMealThumb}/>
            <h1>{meal.strMeal}</h1>
            <div class="meal-category">
                {meal.strArea ? <p class="btn btn-circle bg-dark inline-block">{meal.strArea}</p> : false}
                {meal.strCategory ? <p class="btn btn-circle bg-blue inline-block">{meal.strCategory}</p> : false}
            </div>
            <div class="meal-instructions">
                <p>{meal.strInstructions}</p>
                <h2>Main ingredients:</h2>
                <ul class="meal-ingredients">
                {ingredients.map(ing => {
                    return <li className="meal-ingredients__item btn btn-circle bg-light inline-block">{ing}</li>
                }
                )}
        </ul>
            </div>


        </div>
    )
}

export default MealsDetails
