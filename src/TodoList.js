import React from 'react'
import Todo from './Todo'

const TodoList = ({  todos, setTodos, filteredTodos}) => {
    const deleteAllHandler =() => {
        setTodos([])
    }


    return (
        <div className="todo__container">
            <ul className="todo__list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    setTodos={setTodos} 
                    todo={todo} 
                    todos={todos} 
                    key={todo.id} 
                    text={todo.text} />
                ))}
            </ul>
            <button onClick={deleteAllHandler} className="delete__all">DELETE ALL</button>
        </div>
    )
}

export default TodoList
