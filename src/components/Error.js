import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../constants'

const StyledWrapper = styled.div`
    .img-error {
        object-fit: contain;
        max-height: 250px;
    }
`

export const Error = () => {
  return (
    <StyledWrapper>
      <img className='img-fluid mx-auto d-block img-error' src={IMAGES.livCry} alt='error' />
      <h2>Error!</h2>
    </StyledWrapper>
  )
}
