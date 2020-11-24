import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, clear, editTodo } from '../Actions/Actions'
import {v4 as uuidv4 } from 'uuid'


export class AddTodo extends Component {
    state = {
        text : "",        
    }
    handleChange = (e) =>{
        this.setState({text:e.target.value})
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.save)   
    }

    addItem = () => {
       if (this.props.save)
       {
            this.props.edit(this.state)
            this.props.clear()
            this.setState({text:""}) 
       }
       else
       {
        this.props.add({
            id : uuidv4(),
            text : this.state.text,
            complete :false
        })
        this.setState({text:""})
       }
    }
   
    render() {
        
        return (
            <div>
                <input type="text" value={this.state.text} onChange = {this.handleChange}  />
        <button onClick = {() =>this.addItem()}>{this.props.save ? "Edit" :"Add"}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    save : state.SaveReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        add : (todo) => dispatch(addTodo(todo)),
        edit : (todo) => dispatch(editTodo(todo)),
        clear :() => dispatch(clear())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)
