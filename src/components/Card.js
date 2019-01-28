import React from 'react'
import styled from 'styled-components'

/* Start of CSS */

const Card = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius:11px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`

const CardTitle = styled.h3`
    color: black;
    font-size: 20px;
    font-weight: 500;
    align-items: center;
    justify-items: center;
    visibility: hidden;
`

const CardCoverImage = styled.img`
    position: absolute;
    top: 0;
    height: 110%;
    width: 110%;
    z-index: -1;
`

/* End of CSS */



/* Start of Javascript */

const GalleryContainer = props => (
    <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardCoverImage>src={props.image}></CardCoverImage>
    </Card>)

export default Card

/* End of Javascript */