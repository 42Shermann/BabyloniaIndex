import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NavProp from '../Nav/Nav'

function SideBar () {
  return (
    <div fluid className='mb-4'>
      <img src='https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640447690/banner/main_tsh7e4.png' className='mx-auto d-block img-fluid' alt=""/>
        <h4 className="text-white text-center font-monospace">Main</h4>
            <Row className='gx-2'>
              <Col>
                <NavProp nav={'home'}/>
              </Col>
              <Col>
                <NavProp nav={'characters'}/>
              </Col>
            </Row>
            <Row className='mt-2 gx-2'>
              <Col>
                <NavProp nav={'weapons'}/>
              </Col>
              <Col>
                <NavProp nav={'memories'}/>
              </Col>
            </Row>
            <Row className='mt-2 gx-2'>
              <Col>
                <NavProp nav={'sim'}/>
              </Col>
            </Row>
    </div>
  )
}

export default SideBar
