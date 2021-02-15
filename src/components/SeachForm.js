import React, {useState, useContext} from 'react'
import { MealsContext } from '../context/MealsContext';

const SeachForm = () => {
    const[text, setText] = useState('');
    const {fetchMeals} = useContext(MealsContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
            fetchMeals(text)
            setText('');
        } else {
            alert('Please, fill in the field')
        }
    }

    return (
        <>
        <h1>Meal Finder</h1>
        <div className="form-wrapper my-4">
            <form id="search-form" onSubmit={onSubmit}>
                <input type="text" value={text} className="search-input" onChange={e=>setText(e.target.value.trim())}/>
                <button className="search-button btn bg-dark"><i className="fas fa-search"></i></button>
            </form>
            <button className="random-button btn bg-dark"><i className="fas fa-random"></i></button>
        </div> 
        </>
    )
}

export default SeachForm
