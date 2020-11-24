import {v4 as uuidv4} from 'uuid'
import { ADD_TODO, COMPLETE, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, NOTCOMPLETE } from '../Actions/Types';

const initialState = [
    {
        id: uuidv4(),
        text : "learn react",
        complete : false
    },
    {
        id: uuidv4(),
        text : "learn redux",
        complete : false
    }
]

 const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
    
    case (ADD_TODO) : {
        return [...state,action.payload]
    }

    case (DELETE_TODO) : {
        return state.filter(el => el.id !== action.payload)
    }

    case (COMPLETE_TODO) : {
        return state.map(el => el.id === action.payload ? {...el,complete:!el.complete} : el )
    }

    case (EDIT_TODO) : {
        return state.map (el => el.id === action.payload.id ? action.payload : el) 
    }

    case (COMPLETE) : {
        return state.filter (el => el.complete === true)
    }
    case (NOTCOMPLETE) : {
        return state.filter (el => el.complete === false)
    }

    default:
        return state
    }
}
export default  TodoReducer;
