import {Todo} from "../classes";
import {todoList} from "../index";


//Referencias
const divTodoList = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo');
const btnBorrarComple = document.querySelector('.clear-completed');


export const crearTodoHtml = (todo)=>{

    const htmlTodo = `
        <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>   
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// eventos
textInput.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && textInput.value.length > 0 ){
        const nuevoTodo = new Todo(textInput.value);
        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);
        crearTodoHtml(nuevoTodo);
        textInput.value = '';
    }
})

divTodoList.addEventListener('click', (event) =>{
    const nombreElemento = event.target.localName;//label input button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if(nombreElemento.includes('input')){// check del input
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
})

btnBorrarComple.addEventListener('click',(event)=>{
    if(divTodoList.children.length != 0){

        todoList.eliminarCompletados();

        for(let i = divTodoList.children.length - 1; i >= 0; i--){ // divTodoList.children me retorna un arreglo de todos las etiquetas hijas osea las que contiene
            const elemento = divTodoList.children[i];
            if(elemento.classList.contains('competed')){ // para acceder a las clases de la etiqueta .classList.contains
                divTodoList.removeChild(elemento);
            }
        }
    }
})