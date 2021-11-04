import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
};

function runFactorial() {
    console.log("Run factorial!");
    return factorial();
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const toggleColor = () => {
        setOtherState(prevState => !prevState);
    };
    const colorButton = () => {
        return otherState === false ? "primary" : "warning";
    };
    useEffect(() => { console.log("render"); });
    const resFactorial = useMemo(() => { runFactorial(value); }, [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result factorial: {resFactorial}</p>
                <button className="btn btn-primary me-3"
                    onClick={() => (setValue(prev => prev + 10))}
                >
                    Increment
                </button>
                <button className="btn btn-primary"
                        onClick={toggleColor}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn btn-" + colorButton()}
                        onClick={toggleColor}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
