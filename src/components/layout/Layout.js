import React from 'react'
import { useToggle } from '../../hooks'
import { GlobalStyle, StyledBG, StyledNavbar, StyledFooter } from './style'
import { Outlet } from 'react-router-dom'
import { Row, Col, Container, Navbar, Offcanvas } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import { SideBar } from '..'

function Layout () {
  // State for burger menu
  const [isShow, setShow] = useToggle()
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
              <Navbar.Toggle onClick={setShow} aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                show={isShow}
                onHide={setShow}
              >
              <StyledBG>
              <Offcanvas.Header closeButton closeVariant="white"/>
              <Offcanvas.Body>
                <SideBar handleClick={setShow}/>
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
