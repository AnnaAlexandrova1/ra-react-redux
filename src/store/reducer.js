import { act } from 'react-dom/test-utils';
import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [{ id: 565, title: 'Замена стекла', price:1200, completed: false}], action) {
    switch (action.type) {
        case actions.ADD_TASK: 
            return [
                ...state, {
                    id: ++lastId,
                    title: action.payload.title,
                    price: action.payload.price,
                    completed: false
                }
            ]
        case actions.EDIT_TASK:
            return [
                ...state, {
                    id: ++lastId,
                    title: action.payload.title,
                    price: action.payload.price,
                    completed: false
                }
            ]
        
        case actions.REMOVE_TASK:
            return state.filter(task => action.payload.id !== task.id)     
        default:
            return state
    }
    
}