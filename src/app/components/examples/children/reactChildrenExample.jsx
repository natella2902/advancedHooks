import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
import propTypes, { node } from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    const HandleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    useEffect(() => { console.log(data); }, [data]);
    return React.Children.map(children, child => {
        const config = {
            ...child.props,
            onChange: HandleChange,
            value: data[child.props.name] || ""
        };
        return React.cloneElement(child, config);
    });
};

FormComponent.propTypes = {
    children: propTypes.oneOfType([propTypes.arrayOf(node), propTypes.node])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <FormComponent>
                <TextField label="email" name="email"/>
                <TextField label="password" name="password" type="password"/>
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
