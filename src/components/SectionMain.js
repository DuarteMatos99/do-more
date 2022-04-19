import React from "react";
import ToDo from "./ToDo";
import "../styles/components/_section-main.scss";
import Divider from "./Divider";

const SectionMain = () => {
    return (
        <section className="main-area">
            <ToDo />
            <Divider />
        </section>
    );
};

export default SectionMain;
