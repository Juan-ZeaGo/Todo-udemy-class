

export class TodoListClass{
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){

    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
            }
        }
    }

    eliminarCompletados(){

    }
}