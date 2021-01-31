import React from 'react'
import './ButtonSmall.css'

const ButtonSmall = ({ imp, text, link}) => {
    return (
        <div  className={`button ${imp === 'secondary' ? 'button_white' : ""}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default ButtonSmall
