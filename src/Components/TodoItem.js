import React from 'react'
import { connect } from 'react-redux'
import { completeItem, completeTodo, deleteTodo, incompleteItem, saveTodo } from '../Actions/Actions'
import  '../App.css'


const TodoItem = (props) => {
    return (
        <div>
            <p className ={props.todo.complete ? "done" : undefined}>{props.todo.text}</p>
            <button onClick={() => props.delete(props.todo.id)}>Delete</button>
            <button onClick={() => props.complete(props.todo.id)}>{props.todo.complete ? "Undo" : "done"}</button>
            <button onClick={() => props.save(props.todo)}>Edit</button>
            
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(deleteTodo(id)),
        complete: (id) => dispatch(completeTodo(id)),
        save : (todo) => dispatch(saveTodo(todo)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
