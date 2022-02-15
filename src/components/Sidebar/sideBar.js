import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NavProp from '../Nav/Nav'

const mainList = [
  'home', 'characters', 'weapons', 'memory', 'sim'
]

function SideBar ({ handleClick }) {
  return (
    <div className='mb-4'>
      <img src='https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640447690/banner/main_tsh7e4.png' className='mx-auto d-block img-fluid' alt=""/>
        <h4 className="text-white text-center font-monospace">Main</h4>
            <Row xs={1} md={2} className='gx-2'>
              { mainList.map((item, index) =>
                <Col className='mb-2' key={index}>
                  <NavProp handleClick={handleClick} nav={item}/>
                </Col>
              )}
            </Row>
    </div>
  )
}

export default SideBar
