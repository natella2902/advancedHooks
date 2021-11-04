import React, { useEffect, useState, useCallback } from "react";
import propTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>
    );
};

LogOutButton.propTypes = {
    onLogOut: propTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
};

// const MemoizedLogOutButton = React.memo(LogOutButton, (prevProps, nextProps) => {
//     if (prevProps === nextProps) return true;
//     return false;
// });

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const onLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return <>
        <button className="btn btn-primary" onClick={() => setState(!state)}>Initiate rerender</button>
        <MemoizedLogOutButton onLogOut={onLogOut}/>
    </>;
};

export default MemoWithUseCallbackExample;
