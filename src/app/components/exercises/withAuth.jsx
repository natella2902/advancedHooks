import React, { useState } from "react";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("user"));
    const onLogin = () => {
        localStorage.setItem("user", JSON.stringify("onLogIn"));
        setIsAuth(prevState => !prevState);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(prevState => !prevState);
    };
    return (
        <>
            {<Component {...props} isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut}/>}
        </>
    );
};

export default withAuth;
