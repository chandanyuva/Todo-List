
import Task from './Task'

export default class Project{
    constructor(id,name,isActive=false,tasks){
        this.id =  id;
        this.name = name;
        this.isActive = isActive;
        this.tasks = []
    }

    addTask(title,discription,dueDate,priority,completed){
        const task = new Task(title,discription,dueDate,priority,completed);
        this.tasks.push(task);
    }

}