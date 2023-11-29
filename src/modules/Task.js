export default class Task{
    constructor(title,discription,dueDate,priority,completed=false){
        this.title = title;
        this.discription = discription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed
    }
}