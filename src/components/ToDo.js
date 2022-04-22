import React from "react";
import "../styles/components/_to-do.scss";

const ToDo = () => {
    return (
        <section className="to-do-area">
            <h3>To Do</h3>
            <div className="tasks-unchecked">
                <input type="checkbox" id=""></input>
                <label htmlFor="">First Task</label>
            </div>
        </section>
    );
};

export default ToDo;
