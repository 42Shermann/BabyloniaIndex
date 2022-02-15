import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { COLOUR } from '../../constants'

export const GlobalStyle = styled.div`
    color: white;
    font-size: ${!isMobile ? '16px' : '1rem'};
&
    h1,
    h2 {
    color: white;
    text-align: center;
    align-self: center;
    }
&
    .inverted-img {
    filter: invert(100%);
    }
`
export const StyledBG = styled.div`
  background-color: ${COLOUR.black};
  min-height: 100vh;
`

export const StyledNavbar = styled.div`
  background-color: ${COLOUR.dark};
&
 .navbar-toggler, .navbar-toggler.collapsed{
      background-color: white;
      margin-right: 5px;
  }    
`

export const StyledFooter = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${COLOUR.red};
  color: white;
  text-align: center;
`
