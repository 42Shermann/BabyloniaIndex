import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
      <Link onClick={props.handleClick} className="styledLink" to={`/${props.nav}`} >
        <nav className="btn-nav text-capitalize text-center" >
          {props.nav}
        </nav>
      </Link>
    </StyledWrap>
  )
}

export default Nav
