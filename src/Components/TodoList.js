import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = (props) => { 
    const done = () => {
        props.list.filter(el => el.complete===true)
    }

    const not = () => {
        props.list.filter(el => el.complete===false)
    }
    console.log(props.list)

      
    return (
        <div>
           
            <h1>List of course :</h1>
            {
               props.list.map(el => {
                   return (
                    <div key ={el.id}>
                        <TodoItem todo={el} />
                    </div>
                   )
               })
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    list : state.TodoReducer
})

export default connect(mapStateToProps)(TodoList)
