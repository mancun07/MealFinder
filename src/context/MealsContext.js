import {createContext, useReducer} from 'react';
import MealsReducer from './MealsReducer';
export const MealsContext = createContext();

const initialState = {
    meals: [],
    loading: false,
    meal: {}
}


const MealsContextState = (props) => {

const [state, dispatch] = useReducer(MealsReducer, initialState);

const fetchMeals = async (val) => {
    try {
        setLoading();
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
        const data = await res.json();
        console.log(data.meals);
        dispatch({type: 'GET_MEALS', payload: data.meals })

    }
    catch (err) {
        console.log(`Ошибка: ${err.message}`)
    } 

}

const fetchSingleMeal = async (id) => {
    setLoading();
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    console.log(data.meals[0])

    dispatch({type: 'GET_SINGLE_MEAL', payload: data.meals[0]})
}

const setLoading = () => {
    dispatch({type: 'SET_LOADING'})
}


    return (
        <MealsContext.Provider value={{
            meals: state.meals,
            loading: state.loading,
            meal: state.meal,
            fetchMeals,
            setLoading,
            fetchSingleMeal
        }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextState;