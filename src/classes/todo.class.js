
export class Todo{
    static fromJson({id, tarea, completado, creado}){ // se hace por q local storage lo devulve como objeto y no de la clase
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        tempTodo.tarea = tarea;

        return tempTodo;
    }
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}