import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { COLOUR } from '../../constants'

function Nav (props) {
  const StyledWrap = styled.div`
    & .btn-nav {
        background-color: silver;
        border-radius: 0px;
        border: none;
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
      <nav className="btn-nav text-capitalize text-center" >
        <NavLink className="styledLink" to={`/${props.nav}`} >{props.nav}</NavLink>
      </nav>
    </StyledWrap>
  )
}

export default Nav
