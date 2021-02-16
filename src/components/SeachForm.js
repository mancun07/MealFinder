import React, {useState, useContext, useEffect} from 'react'
import { MealsContext } from '../context/MealsContext';
// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
// import {Toast} from 'react-materialize';

const SeachForm = () => {
    const[text, setText] = useState('');
    const {fetchMeals} = useContext(MealsContext);
    useEffect(() => {
        M.AutoInit();
      },[])
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
            fetchMeals(text)
            setText('');
        } else {
            // alert('Please, fill in the field')
            M.toast({html: 'Поле не должно быть пустым. Заполните пожалуйста!'})
        }
    }

    return (
        <>
        <h1 className="browser-default">Meal Finder</h1>
        <div className="form-wrapper my-4">
            <form id="search-form" onSubmit={onSubmit}>
                <input type="text" className="browser-default" value={text} className="search-input" onChange={e=>setText(e.target.value.trim())}/>
                <button className="search-button btn bg-dark"><i className="fas fa-search browser-default"></i></button>
            </form>
            <button className="random-button btn bg-dark"><i className="fas fa-random browser-default"></i></button>
        </div> 
        </>
    )
}

export default SeachForm
