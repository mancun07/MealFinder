import React from 'react';
import {Link} from 'react-router-dom';

const MealsItem = ({meal}) => {
    return (
        <Link to={`/meals/${meal.idMeal}`} class="meal-item">
                <img src={meal.strMealThumb}/>
                <div class="meal-title">
                    <h3>{meal.strMeal}</h3>
                </div>
        </Link>
    )
}

export default MealsItem;
