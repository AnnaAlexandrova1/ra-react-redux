import * as actions from './actionTypes'

export const addTask = task => (
    {
    type: actions.ADD_TASK, 
    payload: task
})

export const editTask = (name, value) => ({
    type: actions.EDIT_TASK, 
    payload: {name, value }
})

export const removeTask = id => ({
    type: actions.REMOVE_TASK,
    payload: { id }
})