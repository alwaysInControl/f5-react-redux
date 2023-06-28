import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {addTodo, removeTodo} from "../store/todosReducer";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.items)
    const dispatch = useDispatch()

    const handleAddClick = () => {
        if(newTodo.trim() !== '') {
            dispatch(addTodo({
                id: new Date(),
                text: newTodo
            }))
            setNewTodo('')
        }
    }

    const handleDeleteClick = (todoId) => {
        dispatch(removeTodo(todoId))
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input type="text"
                   onChange={event => setNewTodo(event.target.value)}
                   value={newTodo}/>
            <button onClick={handleAddClick}>Add</button><br/>
            <ul>
                {todos.map(task => <li>{task.text}
                    <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                </li>)}
            </ul>
        </div>
    );
};

export default TodoList;