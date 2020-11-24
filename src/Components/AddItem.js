import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo, clear,  completeItem,  editTodo, incompleteItem } from '../Actions/Actions'
import { v4 as uuidv4 } from 'uuid'

const AddItem = (props) => {
    
    const [todo, setTodo] = useState({
       text:""
    })

    const handleChange = (e) => {
        setTodo({...todo,text:e.target.value});
        
    }

    useEffect(() => {
        if (props.save !== null) {
            setTodo(props.save)  
        }
    },[props.save])

    const addItem = () => {
        if (props.save) {
            
            props.edit(todo)
            props.clear()
            setTodo({...todo,text:""})
        }
        else {
            props.add({
                id: uuidv4(),
                text: todo.text,
                complete: false
            })
            setTodo({text:""})
        }
    }
    
    return (
        <div>
            <div>
                <input type="text" value={todo.text} onChange={handleChange} />
                <button onClick={() => addItem()}>{props.save ? "Edit" : "Add"}</button>
                <button onClick = {()=>props.done()}>complete courses</button>
            <button onClick = {() =>props.notDone()}>incomplete courses</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    save: state.SaveReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        add: (todo) => dispatch(addTodo(todo)),
        edit: (todo) => dispatch(editTodo(todo)),
        clear: () => dispatch(clear()),
        done : () => dispatch(completeItem()),
        notDone : () => dispatch(incompleteItem())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddItem)