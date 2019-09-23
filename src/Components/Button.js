import React from 'react'

 
function Button (props) {

    return (

        <div>
            <button onClick = {props.onClick} className = {props.buttonClass}>{props.buttonText}</button>
        </div>
    )
}


export default Button