import React from 'react'
import { Tabs, Tab, Table } from 'react-bootstrap'
import { TableWrapper } from './styles'

const constrMem = [
  {
    id: 1,
    name: 'Condelina',
    stats: {
      HP: 1461,
      Crit: 67,
      ATK: 132,
      DEF: 223
    },
    portrait: {
      first: 'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1642911445/memories/six%20star/Memory-Condelina-Portrait-1_k36nbl.png',
      second: 'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1642911445/memories/six%20star/Memory-Condelina-Portrait-2_nec21l.png',
      third: 'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1642911446/memories/six%20star/Memory-Condelina-Portrait-3_dhxtbi.png'
    }
  },
  {
    id: 2,
    name: 'Shakespeare',
    stats: {
      HP: 1491,
      Crit: 64,
      ATK: 134,
      DEF: 223
    },
    portrait: {
      first: 'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1642913217/memories/six%20star/Memory-Shakespeare-Portrait-1_h6hmyx.png',
      second: 'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1642913216/memories/six%20star/Memory-Shakespeare-Portrait-2_xepha0.png',
      third: 'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1642913217/memories/six%20star/Memory-Shakespeare-Portrait-3_f4huff.png'
    }
  }
]

function MemoriesPage () {
  return (
  <div>
  <h2>Memories</h2>
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
          { constrMem.map((item, index) =>
            <tr className='styled-cell align-middle' key={index}>
                <td>
                  <img className='img-fluid mx-auto d-block img-table' src={item.portrait.first} alt={item.name} />
                </td>
                <td>{item.name}</td>
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
  </div>
  )
}

export default MemoriesPage
