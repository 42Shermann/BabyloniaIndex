import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOUR } from '../../constants'

export const StyledAccordion = styled.div`
& .accordion-button.collapsed {
  background: black;
  color: white;
  font-size: 1.5rem;
}
& .accordion-button {
  background: #dc3545;
  color: white;
  font-size: 1.5rem;
}
& .accordion-body {
  background: black;
  color: white;
}
& .list-group-item {
  background: black;
  color: white;
  border-bottom: 1px solid white;
}
`
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

export const StyledLink = styled(Link)`
    color: white;
    &:hover{
      color: red;
    }
    &:active{
      color: red;
    }
`
