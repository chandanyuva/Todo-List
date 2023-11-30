import Task from "./Task";

export default class Project {
    constructor(id, name, isActive = false, tasks) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.tasks = [];
    }

    addTask(title, discription, dueDate, priority, completed, index) {
        const task = new Task(title, discription, dueDate, priority, completed);
        // console.log(index);
        if (index) {
            this.tasks.splice(index, 0, task);
            // console.log(this.tasks);
            return;
        }
        this.tasks.push(task);
    }

    removeTask(title) {
        let i;
        this.tasks.forEach((task) => {
            if (task.title === title) {
                // console.log(task.title);
                const index = this.tasks.indexOf(task);
                this.tasks.splice(index, 1);
                // console.log(index);
                i = index;
            }
        });
        return i;
    }
}
