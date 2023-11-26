
import Task from './Task'

export default class Project{
    constructor(id,name,isActive=false,tasks){
        this.id =  id;
        this.name = name;
        this.isActive = isActive;
        this.tasks = []
    }

    get isActive(){
        return this._isAvtive;
    }

    set isActive(value){
        this._isAvtive = value;
    }

    addTask(title,discription,dueDate,priority){
        const task = new Task(title,discription,dueDate,priority);
        this.tasks.push(task);
    }

}