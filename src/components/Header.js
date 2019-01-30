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



// End of component style



// Start of component layout 

const Header = props => (
    <HeaderGroup>
     <HeaderTitleText>
        Jianshi Wu
     </HeaderTitleText>
    </HeaderGroup>
)

export default Header

// End of component layout 