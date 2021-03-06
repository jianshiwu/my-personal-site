import React from 'react'
import styled from 'styled-components'

// Start of component style

const CardInstance = styled.div`
    width: 400px;
    height: auto;
    margin: 8px;
    z-index: 0;
    background: white;
    border-radius:11px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    flex: 1 1 276px;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`

const CardCoverImage = styled.img`
`

const CardTitle = styled.p`
    visibility: hidden;
    z-index: 1;
    } 
`


// End of component style



// Start of component layout

const Card = props => (
    <CardInstance>
        <CardCoverImage img={props.image}></CardCoverImage>
        <CardTitle>Project Name</CardTitle>
    </CardInstance>)

export default Card

// End of component layout
