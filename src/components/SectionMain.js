import React from "react";
import ToDo from "./ToDo";
import Done from "./Done";
import "../styles/components/_section-main.scss";
import Divider from "./Divider";

const SectionMain = () => {
    return (
        <section className="main-area">
            <ToDo />
            <Divider />
            <Done />
        </section>
    );
};

export default SectionMain;
