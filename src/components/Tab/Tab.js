import React from 'react'
import { StyledTab } from './style'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function TabComp ({ props }) {
  const skillList = props.map(data => (
  <Tab key={data.id} eventKey={data.id} title={data.cate} className=" my-2 tabContents">
    <div className="row align-items-center">
    <div className="col-12 col-lg-2">
      <img className="img-fluid mx-auto d-block" src={data.img} alt={data.name}/>
    </div>
    <div className="col-12 col-lg-10">
    <div className="row mt-1">
      <h3 className="text-white">
      {data.name}
      </h3>
    </div>
    <div className="row">
      <p className='new-line-text '>
      {data.skillDesc}
      </p>
    </div>
    </div>
  </div>
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
