import React, { useState } from 'react'
import { GlobalStyle, StyledBG, StyledNavbar, StyledFooter } from './style'
import { Outlet } from 'react-router-dom'
import { Row, Col, Container, Navbar, Offcanvas } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import SideBar from '../Sidebar/sideBar'

function Layout () {
  const [show, setShow] = useState(false)
  const handleCloseOffcanvas = () => setShow(false)
  return (
    <GlobalStyle>
      <StyledBG>
      <StyledNavbar className="mb-4">
        <Navbar expand={false}>
            <p className="h2 align-middle mx-3">
              Babylonia Index
            </p>
          {isMobile
            ? <>
              <Navbar.Toggle onClick={() => setShow(true)} aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                show={show}
                onHide={handleCloseOffcanvas}
              >
              <StyledBG>
              <Offcanvas.Header closeButton closeVariant="white"/>
              <Offcanvas.Body>
                <SideBar handleClick={handleCloseOffcanvas}/>
              </Offcanvas.Body>
              </StyledBG>
              </Navbar.Offcanvas>
              </>
            : <></>
          }
        </Navbar>
        </StyledNavbar>
      <Container fluid>
        <Row>
          {!isMobile
            ? <>
            <Col lg={2}>
              <SideBar />
            </Col>
            <Col lg={10}>
              <Outlet />
            </Col>
            </>
            : <Col>
              <Outlet />
            </Col>
          }
        </Row>
      </Container>
      </StyledBG>
      <StyledFooter>
        <p>© 2018 Gandalf</p>
      </StyledFooter>
    </GlobalStyle>
  )
}

export default Layout
