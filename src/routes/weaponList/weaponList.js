/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import api from '../../services/api'
import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/esm/Spinner'
import { StyledAccordion, StyledTable, StyledLink } from './style'

function WeaponList () {
  const [loading, setLoading] = useState(true)
  const [DATA, setData] = useState([])
  const [wepType, setType] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch(`${api}/api/weapon`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      // Get weapon type
      const unique = [...new Set(json.map(item => item.type))]
      setType(unique)
      //
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
      <div>
        <h2>Weapons List</h2>
      </div>
      <StyledAccordion className='mb-4'>
        <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Contents</Accordion.Header>
          <Accordion.Body>
          <ListGroup variant="flush">
            {wepType.map(((type, index) => (
              <NavHashLink
              key={index}
              to={`/weapons/#${type}`}
              >
                <ListGroup.Item >{type}</ListGroup.Item>
              </NavHashLink>
            )))
              }
          </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </StyledAccordion>
      {wepType.length === 0 && loading
        ? <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        : <>
      {wepType.map(((type, index) => (
      <StyledTable key={index} className='mb-4'>
      <h3 id={type} className="text-white" key={index}>{type}</h3>
      <Table responsive='sm'>
        <thead>
          <tr className="bg-danger">
            <th>Weapon</th>
            <th>Ability</th>
            <th>ATK</th>
            <th>CRIT</th>
            <th>Signature</th>
          </tr>
        </thead>
        <tbody className="text-white ">
          {DATA.filter(data => data.type === type).map(data => (
          <tr className='align-middle' key={data.id}>
            <td>
              <div className='row'>
                <img src={data.img} alt={data.name} className='img-fluid mx-auto d-block weapon-img-thumb' />
              </div>
              <div className='row'>
                <p className='text-center'>{data.name}</p>
              </div>
            </td>
            <td className='limit-width'>{data.ability}</td>
            <td>{data.atk}</td>
            <td>{data.crit}</td>
            <td className='avatar-container'>
              <StyledLink className="avatar-text" to={`/characters/${data.const.cID}`}>
              <div className='row'>
                <img className='img-fluid mx-auto d-block weapon-img-thumb' src={data.const.chibiImg.avatar} alt={data.const.Model} />
              </div>
              <div className='row mt-2'>
                <p className='text-center avatar-text'>{data.const.Model}</p>
              </div>
              </StyledLink>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
      </StyledTable>
      )))}
      </>
      }
    </div>
  )
}

export default WeaponList
