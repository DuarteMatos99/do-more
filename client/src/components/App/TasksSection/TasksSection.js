import React from "react";

import "#styles/components/_tasks-section.scss";
import ToDo from "./ToDo";
import Done from "./Done";

const TasksSection = () => {
    return (
        <section className="tasks-area">
            <ToDo />
            <hr />
            <Done />
        </section>
    );
};

export default TasksSection;
