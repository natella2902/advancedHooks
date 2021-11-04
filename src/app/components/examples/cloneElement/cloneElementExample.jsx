import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
const CloneElementExample = () => {
    const field = <TextField label="email" name="email"/>;
    const onHandleChange = (target) => {
        console.log("onChange", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, { onChange: onHandleChange, label: "Clone element" })}
        </CardWrapper>
    );
};

export { CloneElementExample };
