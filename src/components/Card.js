import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <h3>{props.title}</h3>
        <img src={props.image}></img>
    </div>
)

export default Card