/* eslint-disable no-extra-parens */
import React from 'react'
import { useQuery } from 'react-query'
import { Accordion, ListGroup, Table, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import { COLOUR } from '../../constants'
import { StyledLink } from '../../components'
import { api } from '../../config'

function WeaponList () {
  const { isLoading, data } = useQuery('weaponList', async () =>
    fetch(
    `${api}/api/weapon`
    ).then((res) => res.json())
  )
  if (isLoading) {
    return <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
  }
  const StyledAccordion = styled.div`
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
  const StyledTable = styled.div`
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
            </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </StyledAccordion>
      <StyledTable className='mb-4'>
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
          {data.map(data => (
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
              <StyledLink className="avatar-text" url={`characters/${data.const.cID}`} >
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
    </div>
  )
}

export default WeaponList
