import React from 'react'
import styled from 'styled-components'

// Start of component style

const FooterGroup = styled.div`
    padding: 0 16px 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        flex-direction: column-reverse;
    }
`

const FooterCopyrightText = styled.p`
    font-size: 16px;
    line-height: 1.3;
    color: rgba(200,200,200,1);
    @media (max-width: 600px) {
        text-align: center;
    }
`

const FooterSocialLinkGroup = styled.div`
    margin: 16px 0;
    justify-self: right;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px 40px;
    font-size: 16px;   
    color: rgba(200,200,200,1);
    @media (max-width: 600px) {
        text-align: center;
        justify-self: center;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3px 26px;
        max-width: 300px;
        margin: 16px 0 26px;
    }
`

const SocialLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

// End of component style


// Start of component layout 

const Footer = props => (
    <FooterGroup>
     <FooterCopyrightText>
        Copyright © 2019 Jianshi Wu. <br />All rights reserved.
     </FooterCopyrightText>
     <FooterSocialLinkGroup>
         <SocialLink href="mailto:wujianshi52@gmail.com?Subject=Hello!">
            Email
         </SocialLink>
         <SocialLink href="https://www.instagram.com/jianshiwu/" target="_blank" rel="noopener">
            Instagram
         </SocialLink>
         <SocialLink href="https://www.linkedin.com/in/jianshiwu/" target="_blank" rel="noopener">
            LinkedIn
         </SocialLink>
         <SocialLink href="https://medium.com/@jianshiwu" target="_blank" rel="noopener">
            Medium
         </SocialLink>
         <SocialLink href="https://twitter.com/JianshiWu" target="_blank" rel="noopener">
            Twitter
         </SocialLink>
         <SocialLink href="https://dribbble.com/jianshiwu" target="_blank" rel="noopener">
            Dribble
         </SocialLink>
     </FooterSocialLinkGroup>
    </FooterGroup>
)


// End of component layout 

export default Footer