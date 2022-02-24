import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { COLOUR } from '../../constants'

function Nav (props) {
  const StyledWrap = styled.div`
    & .btn-nav {
        height: ${isMobile ? '30px' : 'auto'};
        background-color: silver;
        border-radius: 0px;
        border: none;
        transition-duration: 0.3s;
      }
      
    & .btn-nav:hover {
        background-color: ${COLOUR.red};
      }
      
    & .styledLink {
        color: black;
      }
      & .styledLink:hover {
        color: white;
      }
    `
  return (
    <StyledWrap>
      <Link onClick={props.handleClick} style={{ textDecoration: 'none' }} className="styledLink" to={`/${props.nav}`} >
        <nav className="btn-nav text-capitalize text-center align-middle" >
          {props.nav}
        </nav>
      </Link>
    </StyledWrap>
  )
}

export default Nav
