import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab, Table, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { api } from '../../config'
import { TableWrapper } from './styles'
import { StyledLink, StyledTab } from '../../components'

function MemoriesList () {
  const { isLoading, data } = useQuery('memoriesList', () =>
    fetch(
      `${api}/api/memory`
    ).then((res) => res.json())
  )
  return (
  <div>
  <h2>Memories</h2>
    { !isLoading
      ? <StyledTab>
      <Tabs defaultActiveKey="constructMem" id="memTypeTab" >
  <Tab eventKey="overview" title="Overview">
    ...
  </Tab>
  <Tab eventKey="constructMem" title="Construct Memories">
  <TableWrapper>
    <Table className='text-white text-center' borderless responsive>
        <thead>
        <tr>
          <th>Memory</th>
          <th>Name</th>
          <th>HP</th>
          <th>Crit</th>
          <th>ATK</th>
          <th>DEF</th>
        </tr>
      </thead>
      <tbody>
          { data.map((item, index) =>
            <tr className='styled-cell align-middle' key={index}>
                <td>
                  <Link to={`/memories/${item.name}`}>
                    <img className='img-fluid mx-auto d-block img-table' src={item.portrait[0]} alt={item.name} />
                  </Link>
                </td>
                <td>
                  <StyledLink url={`memories/${item.name}`}>
                    {item.name}
                  </StyledLink>
                </td>
                <td>{item.stats.HP}</td>
                <td>{item.stats.Crit}</td>
                <td>{item.stats.ATK}</td>
                <td>{item.stats.DEF}</td>
            </tr>
          )}
      </tbody>
    </Table>
    </TableWrapper>
  </Tab>
  <Tab eventKey="TransMem" title="Transcendant Memories" disabled>
    ...
  </Tab>
    </Tabs>
    </StyledTab>
      : <div className="text-center">
      <Spinner animation="border" variant="light" />
    </div>
  }
  </div>
  )
}

export default MemoriesList
