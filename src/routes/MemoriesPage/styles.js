import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOUR } from '../../constants'

export const TableWrapper = styled.div`
  .table th {
    background-color: ${COLOUR.red};
  }
  &
  .img-table {
      object-position: 50% 20%;
      object-fit: cover;
      width: 100%;
      height: 100px;
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
