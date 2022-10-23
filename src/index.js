import './styles.css';

import {Todo, TodoListClass} from './classes'

const todoList = new TodoListClass();

const tarea = new Todo('Aprender Js');
const tarea2 = new Todo('Comprar la switch');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);
