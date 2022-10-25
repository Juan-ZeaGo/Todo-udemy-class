import './styles.css';

import {Todo, TodoListClass} from './classes'
import {crearTodoHtml,coutnCompletedHtml} from './js/componentes'

export const todoList = new TodoListClass();

// todoList.todos.forEach(todo =>crearTodoHtml(todo));  // esto se puede minimizar como
// colo cuando el foreach retorna un elemento
todoList.todos.forEach(crearTodoHtml);
coutnCompletedHtml(todoList.contarCompletados());



// const tarea = new Todo('Aprender Js');
// const tarea2 = new Todo('Comprar la switch');
//
// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);
//
// console.log(todoList);
//
// crearTodoHtml(tarea);
// crearTodoHtml(tarea2);
//
// localStorage.setItem('mi-key','ABC123');
