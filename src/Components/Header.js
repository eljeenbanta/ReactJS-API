import React from 'react';


function Header(props){
    return (
        <header className="boder-b  font-bold flex justify-between items-center">
            <span
                className = "font-bold">
                    <h1>Hello {props.name}</h1>
            </span>
         
        </header>  
    )
}

export default Header