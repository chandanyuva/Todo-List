import {
    renderLayout,
    renderHeading,
    renderProjects,
    renderTasks,
    renderFooter,
} from "./DomUtil";

const initialLoad = () => {
    renderLayout();
    renderHeading();
    renderProjects();
    renderTasks();
    renderFooter();
};

export default initialLoad;
