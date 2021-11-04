import React from "react";
import CollapseWrapper from "../common/collapse";
import propTypes, { node } from "prop-types";

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, idx) => {
        const config = {
            ...child.props,
            text: `${idx + 1}. ${child.props.text}`
        };
        return React.cloneElement(child, config);
    });
};

ListComponent.propTypes = {
    children: propTypes.oneOfType([propTypes.arrayOf(node), propTypes.node])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component text="Компонент списка"/>
                <Component text="Компонент списка"/>
                <Component text="Компонент списка"/>
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ text }) => {
    return <div>{text}</div>;
};

Component.propTypes = {
    text: propTypes.string
};

export default ChildrenExercise;
