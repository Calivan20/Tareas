import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo))
    

/*localStorage.setItem('Mi-key','absc'); // key , valor
setTimeout(()=>{
        localStorage.removeItem('mi-key')
},1500)*/