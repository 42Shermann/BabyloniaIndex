import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import SideBar from '../Sidebar/sideBar';
import Search from '../Search/Search'

function Layout() {

    return (
      <>
        <div className='app-bg text-white'>
        <nav className="navbar navbar-dark bg-secondary text-white mb-4" >
          <h2 className="mx-3">
            Babylonia Index
          </h2>
          <Search />
        </nav>
        <Container fluid>
          <Row>
            <Col xs={12} lg={2}>
              <SideBar />
            </Col>
            <Col xs={12} lg={10}>
                <Outlet />
            </Col>
          </Row>
        </Container>
        </div>
        <footer className='footer-styles'>
            <p>© 2018 Gandalf</p>
        </footer>
      </>
    );
}

export default Layout;