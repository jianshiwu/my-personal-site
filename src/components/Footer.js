import React from 'react'
import styled from 'styled-components'

// Start of component style

const FooterGroup = styled.div`
    margin:0 16px;
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
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media (max-width: 600px) {
        text-align: center;
    }
`

const EmailLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

const InstagramLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

const LinkedInLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

const MediumLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

const TwitterLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

const DribbleLink = styled.a`
  color: rgba(200,200,200,1);
  text-decoration: none;
`

const FooterSocialLinkGroup = styled.div`
    padding: 0 0 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 16px;   
    color: rgba(200,200,200,1);
    @media (max-width: 600px) {
        text-align: left;
        grid-template-columns: repeat(2, 1fr);
    }
`

// End of component style


// Start of component layout 

const Footer = props => (
    <FooterGroup>
     <FooterCopyrightText>
        Copyright © 2019 Jianshi Wu. <br />All rights reserved.
     </FooterCopyrightText>
     <FooterSocialLinkGroup>
         <EmailLink href="mailto:wujianshi52@gmail.com?Subject=Hello!">
            Email
         </EmailLink>
         <InstagramLink href="https://www.instagram.com/jianshiwu/" target="_blank">
            Instagram
         </InstagramLink>
         <LinkedInLink href="https://www.linkedin.com/in/jianshiwu/" target="_blank">
            LinkedIn
         </LinkedInLink>
         <MediumLink href="https://medium.com/@jianshiwu" target="_blank">
            Medium
         </MediumLink>
         <TwitterLink href="https://twitter.com/JianshiWu" target="_blank">
            Twitter
         </TwitterLink>
         <DribbleLink href="https://dribbble.com/jianshiwu" target="_blank">
            Dribble
         </DribbleLink>
     </FooterSocialLinkGroup>
    </FooterGroup>
)


// End of component layout 

export default Footer