import React from 'react'
import styled from 'styled-components'


const HeaderGroup = styled.p`
`

const HeaderTitleText = styled.p`
    font-size: 26px;
    margin: 16px;
    position: fixed;
    cursor: pointer;
`


const Header = props => (
  <HeaderGroup>
    <HeaderTitleText>
      Jianshi Wu
    </HeaderTitleText>
  </HeaderGroup>
)

export default Header
