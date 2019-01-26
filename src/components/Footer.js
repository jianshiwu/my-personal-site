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
    font-size: 16px;
    color: rgba(200,200,200,1);
    margin: 0 11px;
    @media (max-width: 720px) {
        text-align: center;
    }
`

const FooterSocialLogoGroup = styled.div`
    @media (max-width: 720px) {
        align-self: center;
    }
`

const EmailLogo = styled.img`
    width: 60px;
    @media (max-width: 720px) {
        width: 45px;
    }
`

const InstagramLogo = styled.img`
    width: 60px;
    @media (max-width: 720px) {
        width: 45px;
    }
`

const TwitterLogo = styled.img`
    width: 60px;
    @media (max-width: 720px) {
        width: 45px;
    }
`

const MediumLogo = styled.img`
    width: 60px;
    @media (max-width: 720px) {
        width: 45px;
    }
`

const LinkedInLogo = styled.img`
    width: 60px;
    @media (max-width: 720px) {
        width: 45px;
    }
`

const Footer = props => (
    <FooterGroup>
     <FooterCopyrightText><p>Copyright © 2019 Jianshi Wu.<br></br>All rights reservded.</p></FooterCopyrightText>
     <FooterSocialLogoGroup>
         <EmailLogo src={props.logo}/>
         <InstagramLogo src={props.logo}/>
         <TwitterLogo src={props.logo}/>
         <MediumLogo src={props.logo}/>
         <LinkedInLogo src={props.logo}/>
     </FooterSocialLogoGroup>
    </FooterGroup>
)

export default Footer