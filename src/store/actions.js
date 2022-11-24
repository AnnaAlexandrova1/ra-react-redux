import * as actions from './actionTypes'

export const addTask = (title, price,) => (
    {
    type: actions.ADD_TASK, 
    payload: {title, price}
})

export const removeTask = id => ({
    type: actions.REMOVE_TASK,
    payload: { id }
})

export const changeTask = (name, value, id) => ({
    type: actions.CHANGE_TASK,
    payload: {name, value, id}
})

export const submitChangeTask = (title, price, id) => ({
    type: actions.SUBMIT_CHANGE_TASK,
    payload: {title, price, id}
})

export const handleTask = (title, price, id) => ({
    type: actions.HANDLE_TASK,
    payload: {title, price, id}
})

export const resetEdit = () => ({
    type: actions.RESET_EDIT,
})
