import React from 'react'
import './Button.css'

export default props => {
    return (
    <button 
    onClick={e => props.Click(props.label, e.target.classList.contains('operationButton'))}
    className={`
        button
        ${props.operation ? 'operationButton' : 'numberButton'}
        ${props.triple ? 'triple' : ''}
    `}>{props.label}</button>
    )
}