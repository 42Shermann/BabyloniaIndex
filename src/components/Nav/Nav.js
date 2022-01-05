import React from 'react'
import { StyledWrap } from './style'
import { NavLink } from 'react-router-dom'

function Nav (props) {
  return (
    <StyledWrap>
      <nav className="btn-nav text-capitalize text-center" >
        <NavLink className="styledLink" to={`/${props.nav}`} >{props.nav}</NavLink>
      </nav>
    </StyledWrap>
  )
}

export default Nav
