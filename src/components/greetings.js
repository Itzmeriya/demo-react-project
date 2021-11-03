import React from "react";
function Greeting(props){
    return <h1>Hello, {props.name} </h1>;
}
function Getgreet()
{
    return(
        <div>
            <Greeting name = "Avinash" />
            <h2>This is a React App</h2>
        </div>
    );
}

export default Getgreet;