import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const someRef = useRef(0);
    const [otherSate, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherSate);
    };
    useEffect(() => { someRef.current++; });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <Divider/>
            <p>Render count: {someRef.current} </p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
