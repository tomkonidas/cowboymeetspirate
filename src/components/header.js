import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.main};
  border-bottom: 3px solid ${({ theme }) => theme.colors.mainDark};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.mainDark};
  margin-bottom: 1.45rem;
  height: 1rem;
`

const Header = ({ siteTitle }) => <HeaderWrapper></HeaderWrapper>

export default Header
