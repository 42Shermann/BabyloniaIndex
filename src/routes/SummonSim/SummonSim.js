import React, { useState } from 'react'
import { Row, Col, Stack, Button } from 'react-bootstrap'
import './SummonSim.css'

const INITIAL_ARRAY = []

function SummonSim () {
  const [currentItem, setItem] = useState(INITIAL_ARRAY)

  function getRandomInt (max, min) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Tower of DOOOOM
  // Will rewrite one day, sorry
  function getItem (int) {
    if (int < 400) {
      return 'Signature Weapon'
    } else if (int < 1600) {
      return '5* Weapon'
    } else if (int < 1650) {
      return 'Off-rate signature 1'
    } else if (int < 1700) {
      return 'Off-rate signature 2'
    } else if (int < 1850) {
      return 'Off-rate 5* Weapon 1'
    } else if (int < 2000) {
      return 'Off-rate 5* Weapon 2'
    } else if (int < 5340) {
      return '4* Weapon'
    } else if (int < 8130) {
      return '3* Weapon'
    } else if (int < 9065) {
      return 'Cog Box'
    } else if (int >= 9065) {
      return 'Overclock mat'
    }
  }

  function doGacha () {
    const array = [...INITIAL_ARRAY]
    for (let i = 0; i < 10; i++) {
      const int = getRandomInt(10000, 0)
      const item = getItem(int)
      if (i === 9 && !currentItem.includes('5* Weapon' || 'Off-rate 5* Weapon 1' || 'Off-rate 5* Weapon 2')) {
        array.push('5* Weapon')
      } else {
        array.push(item)
      }
    }
    return array
  }
  /*
  const clearArray = () => {
    setItem([...INITIAL_ARRAY])
  }
  */
  function handleSummonClick () {
    const allItem = doGacha()
    setItem([...allItem])
  }
  return (
    <div className='mb-4'>
      <h2>Summon Simulator</h2>
      <div className='sim-container mx-auto p-2'>
        <Stack>
          <Button className='' variant="outline-danger" onClick={() => handleSummonClick()}>Summon</Button >
          <div className='mt-2 px-3'>
            <Row xs={6}>
              {currentItem.map((item, index) => (
              <Col className='item-container text-center' key={index}>
                <p>{item}</p>
              </Col>
              ))}
            </Row>
          </div>
        </Stack>
      </div>
    </div>
  )
}

export default SummonSim
