import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
}
& .weapon-img-thumb {
  object-fit: contain; /* keep aspect ratio */
  width: 150px;
  max-height: 100%;
}
&
.avatar-container {
  max-width: 150px;
  color: white;
}
`

export const LimitWidth = styled.td`
  min-width: 300px;
  max-width: 550px;
`

export const StyledLink = styled(Link)`
  color: white;
  & :hover {
    color: red;
  }
`
