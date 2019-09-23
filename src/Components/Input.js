import React from 'react'


function Input (props) {

    return (

        <div className = 'input'>

            <input name = {props.name} onChange = {props.onChange} className = 'input' type = 'text' placeholder = {props.inputPlaceholder}></input>

        </div>
    )
}


export default Input
