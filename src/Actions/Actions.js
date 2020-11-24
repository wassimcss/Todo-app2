import { ADD_TODO, CLEAR, COMPLETE, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, NOTCOMPLETE, SAVE_TODO } from "./Types";


export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload : todo
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload : id
})

export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    payload : id
})

export const saveTodo = (todo) => ({
    type: SAVE_TODO,
    payload : todo
})

export const editTodo = (todo) => ({
    type: EDIT_TODO,
    payload : todo
})

export const clear = () => ({
    type: CLEAR 
})

export const completeItem = () => ({
    type: COMPLETE,
})

export const incompleteItem = () => ({
    type: NOTCOMPLETE,
})
