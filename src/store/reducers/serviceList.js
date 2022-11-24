import * as actions from '../actionTypes'
import { nanoid } from 'nanoid';

const initial_state = [
    { id: nanoid(), title: 'Замена стекла', price: 1200 },
    { id: nanoid(), title: 'Замена аккумулятора', price: 1500 },
    { id: nanoid(), title: 'Ремонт разъема', price:800 }
]

export default function serviceListReducer(state = initial_state, action) {
    switch (action.type) {
        case actions.ADD_TASK:
            return [
                ...state, {
                    id: nanoid(),
                    title: action.payload.title,
                    price: action.payload.price
                }
            ]
        case actions.SUBMIT_CHANGE_TASK:
            return state.map((service) => service.id === action.payload.id ?  {...service, title: action.payload.title, price: action.payload.title } : service)
    
        case actions.REMOVE_TASK:
            return state.filter(task => action.payload.id !== task.id)     
        default:
            return state
    }
    
}