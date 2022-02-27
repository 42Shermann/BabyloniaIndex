import React from 'react'
import styled from 'styled-components'
import { COLOUR } from '../constants'

const StyledTab = ({ children }) => {
  const StyledTab = styled.div`
    .nav-tabs {
      border: none;
    }

    .nav-tabs .nav-link {
      color: white;
      text-decoration: solid;
      background-color: ${COLOUR.red};
      border: none;
      border-radius: 0px;
    }

    .nav-tabs .nav-link.active {
      background-color: black;
      border: none;
      color: white;
      font-weight: bolder;
    }

    .nav-tabs .nav-link:hover {
      background-color: #ad3a57;
    }

    .nav-tabs .nav-link.active:hover {
      background-color: black;
    }

    .tabContents {
      background-color: black;
    }

    .new-line-text {
      white-space: pre-wrap;
    }

    @media (max-width: 428px) {
      .tabContents {
        padding-left: 10px;
        padding-right: 10px;
      }
      .center-heading {
          margin: 0 auto;
          text-align: center;
          margin-bottom: 10px;
      }
    }

  `
  return (
    <StyledTab>
      {children}
    </StyledTab>
  )
}

export default StyledTab
