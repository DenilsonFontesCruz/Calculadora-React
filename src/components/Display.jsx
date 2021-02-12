import React from 'react'
import './Display.css'

export default props => {
    return (
    <div className="display">
        <p>{props.result}</p>
        </div>
    )
}