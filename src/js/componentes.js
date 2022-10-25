import {Todo} from "../classes";
import {todoList} from "../index";


//Referencias
const divTodoList = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo');
const btnBorrarComple = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const countCompleted = document.querySelector('.todo-count');


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

export const coutnCompletedHtml = (numberCompleted)=>{
    console.log(countCompleted.children[0].innerText = numberCompleted);
        // [0].innerText = numberCompleted;
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
    coutnCompletedHtml(todoList.contarCompletados());
});

btnBorrarComple.addEventListener('click',(event)=>{
    if(divTodoList.children.length != 0){
        todoList.eliminarCompletados();
        for(let i = divTodoList.children.length - 1; i >= 0; i--){ // divTodoList.children me retorna un arreglo de todos las etiquetas hijas osea las que contiene
            const elemento = divTodoList.children[i];
            console.log(elemento);
            if(elemento.classList.contains('completed')){ // para acceder a las clases de la etiqueta .classList.contains
                divTodoList.removeChild(elemento);
            }
        }

    }
});

ulFiltros.addEventListener('click',(event)=>{
   const nombreElemento = event.target.text;

   if (!nombreElemento){return;}

   anchorFiltros.forEach(elem=> elem.classList.remove('selected'));

   event.target.classList.add('selected');

   for (const elemento of divTodoList.children){
       elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (nombreElemento){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
   }
});