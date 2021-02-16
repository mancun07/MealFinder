import React, {useContext} from 'react'
import { MealsContext } from '../context/MealsContext';

const ClearButton = () => {
    const {clearMeals} = useContext(MealsContext);
    return (
        <button className="btn bg-blue" onClick={clearMeals}>Очистить результаты поиска</button>
    )
}

export default ClearButton
