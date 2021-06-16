import React from 'react'
import AddIcon from '@material-ui/icons/Add';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(!inputText || /^\s*$/.test(inputText)) {
            return
        }
        setTodos([ ...todos, {text: inputText, completed: false, id:Math.random() * 1000}
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo__input"/> 
            <button onClick={submitTodoHandler} className="todo__button" type="submit">
                <AddIcon className="add__button" /> 
            </button>  
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter__todo">
                    <option value="all">ALL</option>
                    <option value="completed">COMPLETED</option>
                    <option value="uncompleted">UNCOMPLETED</option>
                </select>
            </div>
        </form>
    )
}

export default Form
