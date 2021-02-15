import React, {useContext} from 'react';
import { MealsContext } from '../context/MealsContext';
import MealsItem from './MealsItem';
import Preloader from './Preloader';
import SearchResult from './SearchResult';

const Meals = () => {
    const {meals} = useContext(MealsContext);
    console.log(meals)


    return (
        <>
        {meals && meals.length > 0 && <SearchResult text={'The result found are as follows:'}/>}
        {!meals && <SearchResult text={'No any info matching to your request. Please, change your request...'}/>      
        }
        <div className="meals-container">
            {/* {meals.length == 0 && <Preloader/>} */}
            {meals && meals.length > 0 && meals.map(meal => {
                return <MealsItem key={meal.idMeal} meal={meal}/>
            }) }
        </div>
        
        </>

    )
}

export default Meals;
