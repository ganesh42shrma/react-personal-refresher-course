import React,{ useReducer,useState} from 'react';
import Todo from './Todo';
import '../style.css'

export const ACTIONS = {
   ADD_TODO : 'add_todo',
   TOGGLE_TODO : 'toggle_todo',
   DELETE_TODO : 'delete_todo',
   EDIT_TODO: 'edit_todo',
}

export function editTodoAction(id, newName) {
    return { type: ACTIONS.EDIT_TODO, payload: { id, newName } };
  }

function reducer(todos, action){
    switch (action.type) {
        case ACTIONS.ADD_TODO :
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO :
            return todos.map(todo=>{
                if(todo.id === action.payload.id){
                    return {...todo,complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO :
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTIONS.EDIT_TODO:
                return todos.map(todo=>{
                  if (todo.id === action.payload.id) {
                    return { ...todo, name: action.payload.newName };
                  }
                })
        default:
            return todos
        }
}

function newTodo(name){
    return { id : Date.now() , name : name , complete : false }
}

export default function UseReducerExample2(){
    const [todos,dispatch] = useReducer(reducer,[])
    const [name,setName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        dispatch({ type : ACTIONS.ADD_TODO , payload : { name:name}});
        setName('')
    }
    console.log(todos);
    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input' type='text' value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {todos.map(todo => {
               return <Todo key={todo.id} todo={todo}  dispatch={dispatch}/>
            })}
        </>
    )
}