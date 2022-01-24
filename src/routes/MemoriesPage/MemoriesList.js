import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab, Table, Spinner } from 'react-bootstrap'
import { api } from '../../config'
import { TableWrapper } from './styles'

function MemoriesList () {
  const [isLoading, setLoading] = useState(true)
  const [DATA, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch(`${api}/api/memory`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      setData(json)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  }
  , [])
  return (
  <div>
  <h2>Memories</h2>
    { !isLoading
      ? <Tabs defaultActiveKey="constructMem" id="memTypeTab" >
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
          { DATA.map((item, index) =>
            <tr className='styled-cell align-middle' key={index}>
                <td>
                  <Link to={`/memory/${item.name}`}>
                    <img className='img-fluid mx-auto d-block img-table' src={item.portrait.first} alt={item.name} />
                  </Link>
                </td>
                <td>
                  <Link to={`/memory/${item.name}`}>
                    {item.name}
                  </Link>
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
      : <div className="text-center">
      <Spinner animation="border" variant="light" />
    </div>
  }
  </div>
  )
}

export default MemoriesList
