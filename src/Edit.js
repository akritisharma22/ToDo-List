import React, {useState} from 'react'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import Todo from './Todo'

const Edit = ({ setTodos, todo, todos}) => {
    const [edit, setEdit] = useState("");

    const setEditHandler = (e) => {
        setEdit(e.target.value)
    }

    const handleEdit = () => {
        setEdit(!edit);
      };


    const submitUpdate = (e) => {
        e.preventDefault();
        setTodos([...todos, ...edit, {text: edit, completed: false, id:Math.random() *1000}])
    
    }

    return (
        <div className="todo" key={todo.id}>
            {!edit ? (
                <>
                <button onClick={handleEdit} className="edit__button" disabled={todo.completed}>
                <EditOutlinedIcon className="edit__btn"></EditOutlinedIcon>
                </button>
                </>
            ) : (
                <form>
                <>
                <input 
                onChange={setEditHandler}
                value={edit}
                type="text" />
                <button onClick={handleEdit}>Cancel</button>
                <button onClick={submitUpdate} type="submit">Save</button>
            </>
            </form>
            )}
    </div>
    )
}

export default Edit