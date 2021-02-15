const MealsReducer = (state, action) => {

    switch(action.type) {
        case 'GET_MEALS': 
        return {
            ...state,
            meals: action.payload,
            loading: false
        }

        case 'GET_SINGLE_MEAL':
        return {
            ...state,
            meal: action.payload,
            loading: false
        }

        case 'SET_LOADING': 
        return {
            ...state,
            loading: true

        }
        
        default: 
        return state
    }
}

export default MealsReducer;