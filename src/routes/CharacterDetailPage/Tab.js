import React from 'react'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'
import { StyledTab } from '../../components'

function TabComp ({ props }) {
  const skillList = props.map(data => (
  <Tab key={data.id} eventKey={data.id} title={data.cate} className=" my-2 tabContents">
    <Row className="align-items-center">
    <Col xs={12} md={2}>
      <img className="img-fluid mx-auto d-block" src={data.img} alt={data.name}/>
    </Col>
    <Col xs={12} md={10}>
    <Row className="mt-1">
      <Col>
        <h3 className="text-white center-heading">
          {data.name}
        </h3>
      </Col>
    </Row>
    <Row>
      <p className='new-line-text'>
      {data.skillDesc}
      </p>
    </Row>
    </Col>
  </Row>
  </Tab>
  )
  )

  return (
  <StyledTab>
    <Tabs defaultActiveKey={1} id={`${props}`}>
      {skillList}
    </Tabs>
  </StyledTab>
  )
}

export default TabComp
