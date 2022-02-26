import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { COLOUR } from '../constants'

const mainList = [
  'home', 'characters', 'weapons', 'memories', 'sim'
]

function SideBar ({ handleClick }) {
  const StyledWrapper = styled.div`
  & .btn-nav {
      height: ${isMobile ? '30px' : 'auto'};
      background-color: silver;
      border-radius: 0px;
      border: none;
      transition-duration: 0.3s;
    }
    
  & .btn-nav:hover {
      background-color: ${COLOUR.red};
      transform: scale(1.05);
    }
    
  & .styledLink {
      color: black;
    }
    & .styledLink:hover {
      color: white;
    }
  `
  return (
    <div className='mb-4'>
      <img src='https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640447690/banner/main_tsh7e4.png' className='mx-auto d-block img-fluid' alt=""/>
        <h4 className="text-white text-center font-monospace">Main</h4>
            <Row xs={1} md={2} className='gx-2'>
              { mainList.map((item, index) =>
                <Col className='mb-2' key={index}>
                  <StyledWrapper>
                    <Link onClick={handleClick} style={{ textDecoration: 'none' }} className="styledLink" to={`/${item}`} >
                      <nav className="btn-nav text-capitalize text-center align-middle" >
                        {item}
                      </nav>
                    </Link>
                  </StyledWrapper>
                </Col>
              )}
            </Row>
    </div>
  )
}

export default SideBar
