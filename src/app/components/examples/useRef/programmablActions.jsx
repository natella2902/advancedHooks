import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammablActionsExample = () => {
    const refInput = useRef();
    const onFocus = () => {
        refInput.current.focus();
    };
    const onWidthChange = () => {
        refInput.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" id="email" className="form-control" ref={refInput} />
            <button className="btn btn-primary" onClick={onFocus}>Focus</button>
            <button className="btn btn-warning" onClick={onWidthChange}>Change width</button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
