import React, { useEffect, useState, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const HandleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => { withOutCallBack.current++; }, [validateWithOutCallback]);
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => { withCallBack.current++; }, [validateWithCallback]);
    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callback: {withOutCallBack.current}</p>
            <p>Render callback: {withCallBack.current}</p>
            <label htmlFor="email"
            className="form-label"
            ></label>
            <input type="text"
            className="form-control"
            id="email"
            name="email"
            value={data.email || ""}
            onChange={HandleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
