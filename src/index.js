import './styles.css';

import {Todo, TodoListClass} from './classes'
import {crearTodoHtml} from './js/componentes'

const todoList = new TodoListClass();

const tarea = new Todo('Aprender Js');
const tarea2 = new Todo('Comprar la switch');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);

crearTodoHtml(tarea);
crearTodoHtml(tarea2);
