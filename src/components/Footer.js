import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
    }
`

const FooterCopyrightText = styled.p`
    font-size: 14px;
    color: rgba(200,200,200,1);
    margin: 0 11px;
    @media (max-width: 720px) {
        text-align: center;
    }
`

const FooterSocialLinkGroup = styled.a`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
    alligh-self: right;
    color: rgba(200,200,200,1);
    margin: 0 11px;
    @media (max-width: 720px) {
        align-self: center;
    }
`

const Footer = props => (
    <FooterGroup>
     <FooterCopyrightText>
         Copyright © 2019 Jianshi Wu. <br />All rights reserved.
     </FooterCopyrightText>
     <FooterSocialLinkGroup>
         <a href="mailto:wujianshi52@gmail.com?Subject=Hello!">
            Email
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
    </FooterGroup>
)

export default Footer