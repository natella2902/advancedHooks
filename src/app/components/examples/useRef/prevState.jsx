import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherSate, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState(otherSate === "false" ? "true" : "false");
    };
    useEffect(() => { prevState.current = otherSate; });
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider/>
            <p>prevState: {prevState.current} </p>
            <p>currentState: {otherSate} </p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
