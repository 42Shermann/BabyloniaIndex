import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
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
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-lg-2">
              <SideBar />
            </div>
            <div className="col-12 col-lg-10">
                <Outlet />
            </div>
          </div>
        </div>
        </div>
        <footer className='footer-styles'>
            <p>© 2018 Gandalf</p>
        </footer>
      </>
    );
}

export default Layout;