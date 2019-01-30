import React from 'react'
import styled from 'styled-components'

// Start of component style

const HeaderGroup = styled.div`
    position:fixed;
    z-index: 9999;
`

const HeaderTitleText = styled.p`
    font-size: 26px;
    margin: 16px;
    position: fixed;
    cursor: pointer;
`

const HeaderTabGroup = styled.div`
    font-size: 26px;
    position: fixed;
    margin: 0px 0px 0px 36%;
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const AboutTab = styled.p`
`
const WorksTab = styled.p`
`
const BlogTab = styled.p`
`

const HeaderAboutText = styled.div`
    position: fixed;
    right: 16px;
    margin: 0px 16px 0px 66%;
    max-width: 400px;
    transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
`




// End of component style



// Start of component layout 

const Header = props => (
    <HeaderGroup>
     <HeaderTitleText>
        Jianshi Wu
     </HeaderTitleText>
     <HeaderTabGroup>
         <AboutTab>About</AboutTab>
         <WorksTab>Works</WorksTab>
         <BlogTab>Blog</BlogTab>
     </HeaderTabGroup>
     <HeaderAboutText>
      <p>My name is Jianshi Wu, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
     </HeaderAboutText>
    </HeaderGroup>
)

export default Header

// End of component layout 