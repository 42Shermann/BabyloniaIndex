import React, { useState } from 'react'
import { Stack, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { doGacha, handleSummonPool, handleColorType, INITIAL_ARRAY } from './simFunction'

function SummonSim () {
  const [currentItem, setItem] = useState(INITIAL_ARRAY)
  const [countSummon, setCount] = useState(0)

  const clearArray = () => {
    setItem([...INITIAL_ARRAY])
    setCount(0)
  }

  function handleSummon () {
    const allItem = doGacha()
    setItem([...allItem])
    setCount(n => n + 10)
  }

  const StyledWrapper = styled.div`
  .sim-container {
    width: 80%;
    background-color: white;
  }

  .widget-container {
    width: 50%;
  }

  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  `
  const StyledItemContainer = styled.div`
    box-shadow: 0px 0px 4px 3px ${({ color }) => handleColorType(color)} ;
    animation: glower 1s infinite alternate;
    color: black;
    .img-thumb {
      object-fit: contain; /* keep aspect ratio */
      max-height: 150px;
    }
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
                <img className='img-fluid mx-auto d-block img-thumb' src={handleSummonPool(item)[1]} alt={handleSummonPool(item)[0]} />
                <p>{handleSummonPool(item)[0]}</p>
              </StyledItemContainer>
              ))}
          </div>
        </Stack>
      </div>
    </StyledWrapper>
  )
}

export default SummonSim
