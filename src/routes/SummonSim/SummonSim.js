import React, { useState } from 'react'
import { Stack, Button } from 'react-bootstrap'
import styled from 'styled-components'

const INITIAL_ARRAY = []
const testArr = ['fiveStarWeapon', 'signatureOffRate1', 'signatureOffRate2', 'fiveStarOffRate1', 'fiveStarOffRate2']

function SummonSim () {
  const [currentItem, setItem] = useState(INITIAL_ARRAY)
  const [countSummon, setCount] = useState(0)

  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Tower of DOOOOM
  // Will rewrite one day, sorry
  function getItem (int) {
    if (int < 400) {
      return 'signatureWeapon'
    } else if (int < 1600) {
      return 'fiveStarWeapon'
    } else if (int < 1650) {
      return 'signatureOffRate1'
    } else if (int < 1700) {
      return 'signatureOffRate2'
    } else if (int < 1850) {
      return 'fiveStarOffRate1'
    } else if (int < 2000) {
      return 'fiveStarOffRate1'
    } else if (int < 5340) {
      return 'fourStarWeapon'
    } else if (int < 8130) {
      return 'threeStarWeapon'
    } else if (int < 9065) {
      return 'cogBox'
    } else if (int >= 9065) {
      return 'overclockMat'
    }
  }

  const checkPity = (input) => testArr.includes(input)

  function doGacha () {
    const array = [...INITIAL_ARRAY]
    for (let i = 0; i < 10; i++) {
      const int = getRandomInt(0, 10000)
      const item = getItem(int)
      if (i === 9 && !(array.some(checkPity))) {
        array.push('fiveStarWeapon')
      } else {
        array.push(item)
      }
    }
    return array
  }

  const clearArray = () => {
    setItem([...INITIAL_ARRAY])
    setCount(0)
  }

  function handleSummon () {
    const allItem = doGacha()
    setItem([...allItem])
    setCount(n => n + 10)
  }

  const handleColorType = color => {
    switch (color) {
      case 'signatureWeapon':
      case 'signatureOffRate1':
      case 'signatureOffRate2':
        return 'red'
      case 'fiveStarWeapon':
      case 'fiveStarOffRate1':
      case 'fiveStarOffRate2':
        return 'orange'
      case 'fourStarWeapon':
        return 'purple'
      default:
        return 'blue'
    }
  }

  const StyledWrapper = styled.div`
  .widget-container {
    width: 50%;
  }

  .sim-container {
    width: 80%;
    background-color: white;
  }

  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  `
  const StyledItemContainer = styled.div`
    height: calc(80vh / 5);
    box-shadow: 0px 0px 4px 3px ${({ color }) => handleColorType(color)} ;
    animation: glower 1s infinite alternate;
    color: black;
  `

  return (
    <StyledWrapper className='mb-4'>
      <h2>Summon Simulator</h2>
      <div className='sim-container mx-auto'>
        <Stack >
          <Stack className='m-2' direction='horizontal' gap={1}>
            <Button className='widget-container' variant="outline-danger" onClick={() => handleSummon()}>Summon</Button >
            <Button className='widget-container' variant="outline-danger" onClick={() => clearArray()}>Reset</Button >
          </Stack>
          <Stack direction='horizontal' gap={3} className='text-black my-2 '>
            <div className='widget-container text-center'>
              <p>Summon Count</p>
              <p>{countSummon}</p>
            </div>
            <div className='widget-container text-center'>
              <p>Total estimated USD spent</p>
              <p>{(countSummon * 4.18).toFixed(2)}$</p>
            </div>
          </Stack>
          <div className='px-3 mb-2 item-wrapper'>
              {currentItem.map((item, index) => (
              <StyledItemContainer color={item} className='item-container text-center' key={index}>
                <p>{item}</p>
              </StyledItemContainer>
              ))}
          </div>
        </Stack>
      </div>
    </StyledWrapper>
  )
}

export default SummonSim
