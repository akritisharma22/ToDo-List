import React from 'react'
import Edit from './Edit'
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                    }
            }
            return item;
        }))
    }

    const updatedTodos = (newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todo.id ? newValue : item)))
        
    }


    const editHandler = (id) => {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }


    return (
        <div className="todo">
                <li className={`todo__item ${todo.completed ? "completed" : ""}`}> {text} </li>
                <button onClick={completeHandler} className="done__button">
                    <DoneOutlineOutlinedIcon className="check__btn" ></DoneOutlineOutlinedIcon>
                </button> 
                <button onClick={deleteHandler} className="trash__button">
                    <DeleteOutlineOutlinedIcon className="delete__btn"></DeleteOutlineOutlinedIcon>
                </button>
                {/* <button onClick={editHandler} className="edit__button" disabled={todo.completed}>
                    <EditOutlinedIcon className="edit__btn"></EditOutlinedIcon>
                </button> */}
                <Edit 
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                editHandler={editHandler}
                updatedTodos={updatedTodos}/>
        </div>
    )
}

export default Todo
