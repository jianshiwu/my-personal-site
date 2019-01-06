import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px,
`

const FooterCopyrightText = styled.p`
    font-size: 16px;
    color: gray;
`

const FooterSocialLogoGroup = styled.div`
    allign-self: right;
`

const EmailLogo = styled.img`
    width: 60px;
`

const InstagramLogo = styled.img`
    width: 60px;
`

const TwitterLogo = styled.img`
    width: 60px;
`

const MediumLogo = styled.img`
    width: 60px;
`

const LinkedInLogo = styled.img`
    width: 60px;
`



const Footer = props => (
    <FooterGroup>
     <FooterCopyrightText>{props.text}</FooterCopyrightText>
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