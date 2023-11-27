
import Project from './Project';

const  projects = [];

const p1 = new Project(1,'test1',true);
const p2 = new Project(2,'test2');


p1.addTask('task1','p1',87432,2);
p1.addTask('task2','p1',87432,1);

p2.addTask('task1','p2',87432,2);
p2.addTask('task2','p2',87432,2);

projects.push(p1);
projects.push(p2);

export {projects};