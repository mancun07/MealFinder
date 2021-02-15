import React, {useContext, useEffect} from 'react'
import { MealsContext } from '../context/MealsContext';

const SearchResult = ({text}) => {
    const {meals} = useContext(MealsContext);

    return (
        <div class="result-heading">
                <h1>{text}</h1>
        </div>
    )
}

export default SearchResult;
