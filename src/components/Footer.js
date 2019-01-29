import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
    }
`

const FooterCopyrightText = styled.p`
    font-size: 16px;
    color: rgba(200,200,200,1);
    margin: 0 10px;
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media (max-width: 600px) {
        text-align: center;
    }
`

/*
const FooterSocialLinkGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 16px;
    color: rgba(200,200,200,1);
    @media (max-width: 600px) {
        align-self: center;
    }
`
*/

// End of CSS 



// Start of Javascript 

const Footer = props => (
    <FooterGroup>
     <FooterCopyrightText>
         Copyright © 2019 Jianshi Wu. <br />All rights reserved.
     </FooterCopyrightText>
    </FooterGroup>
)

/*
     <FooterSocialLinkGroup>
         <a href="mailto:wujianshi52@gmail.com?Subject=Hello!">
         <span id="email">Email</span>
         </a>
         <a href="https://www.instagram.com/jianshiwu/" target="_blank">
            <span id="instagram">Instagram</span>
         </a>
         <a href="https://www.linkedin.com/in/jianshiwu/" target="_blank">
            <span id="linkedin">LinkedIn</span>
         </a>
         <a href="https://medium.com/@jianshiwu" target="_blank">
            <span id="medium">Medium</span>
         </a>
     </FooterSocialLinkGroup>
*/

export default Footer