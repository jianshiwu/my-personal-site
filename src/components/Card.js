import React from 'react'
import styled from 'styled-components'

// Start of component style

const CardGroup = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    z-index: 0;
    background: white;
    border-radius:11px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`

const CardCoverImage = styled.img`
`

// End of component style



// Start of component layout

const Card = props => (
    <CardGroup>
        <CardCoverImage></CardCoverImage>
    </CardGroup>)

export default Card

// End of component layout
