import React from "react";
import propTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {<button
                className="btn btn-primary"
                onClick={ !isAuth ? onLogin : onLogOut}>{ !isAuth ? "Войти" : "Выйти из системы"}
            </button>}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: propTypes.func,
    onLogOut: propTypes.func,
    isAuth: propTypes.bool,
    onClick: propTypes.func
};

export default SimpleComponent;
