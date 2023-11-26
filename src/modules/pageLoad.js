import pageHeading from './pageHeading';
import pageProjects from './pageProjects';
import pageTasks from './pageTasks';

const initialLoad = ()=>{
    pageHeading();
    pageProjects();
    pageTasks();
}

export default initialLoad