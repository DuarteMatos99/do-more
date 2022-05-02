import React from "react";

import "#styles/components/_section-header.scss";

import TitleDate from "./TitleDate";

const date_title = TitleDate();

const HeaderSection = () => {
    return (
        <section className="header-area">
            <h1 className="title-logo">Do more</h1>
            <h3 className="title-date">{date_title}</h3>
        </section>
    );
};

export default HeaderSection;
