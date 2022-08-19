import React from "react";

const Greet = (props) => {
    return (
        <div>
        <h1>Hello {props.name} called as {props.superName} and {props.list}</h1>
        {props.children}
        </div>
    )
}

export default Greet;