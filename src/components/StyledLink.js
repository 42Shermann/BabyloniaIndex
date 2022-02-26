import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled(Link)`
  color: red;
  transition-duration: 0.3s;
  font-weight: bold;
  &:hover {
  color: white;
  }
`

function StyledLink ({ url, children }) {
  return (
    <StyledWrapper style={{ textDecoration: 'none' }} to={`/${url}`} >
      <nav className="btn-nav text-capitalize text-center align-middle" >
        {children}
      </nav>
    </StyledWrapper>
  )
}

export default StyledLink
