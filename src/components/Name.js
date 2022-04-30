import React from 'react';

const Greet = (props)=>{
    return(
        <>
        <h2>Hello {props.name} {props.surname}</h2>
        {props.children}
        </>
    )
}

export default Greet;