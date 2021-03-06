import React from 'react'
import styled from 'styled-components'

// Start of component style

const HeaderGroup = styled.div`
    position:fixed;
    z-index: 9999;
`

const HeaderTitleText = styled.p`
    font-size: 26px;
    margin: 16px 0 0 22px;
    position: fixed;
    cursor: pointer;
`

const HeaderTabGroup = styled.div`
    font-size: 26px;
    position: fixed;
    display: grid;
    margin: 16px 16px 0px 36%;
    @media (max-width: 600px) {
        right: 16px;
    }
`

const HeaderAboutText = styled.div`
    position: fixed;
    right: 16px;
    margin: 0 16px 0 66%;
    max-width: 400px;
    @media (max-width: 600px) {
        top: 200px;
        right: 10%;
        left: 10%;
        margin: auto;
        max-width: 330px;
        text-align: center;
    }
`

// End of component style


// Start of component layout 

const Header = () => (
    <HeaderGroup>
     <HeaderTitleText>
        Jianshi Wu
     </HeaderTitleText>
     <HeaderTabGroup>
        <span id="about">About</span>
        <span id="work">Work</span>
        <span id="ideas">Ideas</span>
     </HeaderTabGroup>
     <HeaderAboutText>
      <p>I design beautiful things. I'm trained as an architect. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, quae ab illo inventore veritatis et quas</p>
     </HeaderAboutText>
    </HeaderGroup>
)

export default Header

// End of component layout 