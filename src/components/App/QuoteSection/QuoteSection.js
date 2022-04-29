import React from "react";

import "#styles/components/_quote-section.scss";

const QuoteSection = () => {
    const [quoteInfo, setQuoteInfo] = React.useState({
        quote: "",
        author: "",
    });

    const getQuoteAPI = async () => {
        const response = await fetch(
            "https://api.quotable.io/random?maxLength=80"
        );
        const data = await response.json();
        if (response.ok) {
            setQuoteInfo({
                quote: data.content,
                author: data.author,
            });
        } else {
            setQuoteInfo({
                quote: "Quote not found, don't worry everything will be alright.",
                author: "Duarte Matos",
            });
        }
    };

    React.useEffect(() => {
        getQuoteAPI();
        console.log("I");
    }, []);

    return (
        <section className="quote-area">
            <div className="quote">
                <h3>{`"${quoteInfo.quote}"`}</h3>
                <p>{`- ${quoteInfo.author}`}</p>
            </div>
        </section>
    );
};

export default QuoteSection;
