import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './SummonSim.css'

function SummonSim () {
  const [currentItem, setItem] = useState([])
  return (
    <div className='mb-4'>
      <h2>Summon Simulator</h2>
      <div className='sim-container mx-auto d-flex align-items-center p-2'>
        <div className="summon-btn text-center align-self-start">
          <p onClick={ () => setItem([1, 2, 3])} className='align-middle lead'>Summon</p>
          <div className='py-2'>
            <Row className='gx-2'>
              {currentItem.map(item => (
                <Col key={item} className='mb-2' xs={6}>
                    <div className='item-container'>
                    <p>{item}</p>
                    </div>
                </Col>
              )
              )}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummonSim
