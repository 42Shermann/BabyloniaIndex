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
    width: 50%;
    text-align: left;
    align-self: left;
`
