import styled from 'styled-components'
import { COLOUR } from '../../constants'

export const StyledTable = styled.div`
& .table th {
    color: white;
    background-color: ${COLOUR.red};
}
& .table .limit-width {
  min-width: 300px;
  max-width: 550px;
}
& .weapon-img-thumb {
  object-fit: contain; /* keep aspect ratio */
  width: 150px;
  max-height: 100%;
}
`

export const StyledHeader = styled.h2`
    background-color: ${COLOUR.red};
    text-align: left;
    align-self: left;
`

export const ImgContainer = styled.div`
  position: relative;
  text-align: center;
  .centered {
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &
  // Hidden text for accessibility
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
`
