import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { COLOUR } from '../constants'

const StyledWrapper = styled(Navbar)`
    background-color: ${COLOUR.red};
`

const Footer = () => {
  return (
    <StyledWrapper>
      <Container>
        <Navbar.Brand>About Babylonia Index</Navbar.Brand>
      </Container>
    </StyledWrapper>
  )
}

export default Footer
