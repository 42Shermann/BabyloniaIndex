import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Spinner, Table } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { StyledTable, StyledHeader, ImgContainer } from './style'
import { CommentSection, Divider, Error } from '../../components'
import { api } from '../../config'
import cloudEdit from '../../utils/CloudinaryImage'

function MemoryDetail () {
  const { memName } = useParams()
  const { isLoading, error, data } = useQuery(['memoryDetail', memName], () =>
    fetch(
      `${api}/api/memory/${memName}`
    ).then((res) => res.json())
  )

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="light" />
      </div>
    )
  }

  if (!data.length || error) {
    return <div>
        <Error />
      </div>
  }

  return (
      <div>
        <div>
            <ImgContainer>
              <h2 className='sr-only'>{data[0].name}</h2>
              <img className='img-fluid mx-auto d-block' src={cloudEdit(data[0].portrait[0])} alt={data[0].name} />
              <p className='centered display-3'>{data[0].name}</p>
            </ImgContainer>
            <StyledTable>
            <Table className='text-white'>
              <thead>
                <tr>
                  <th>HP</th>
                  <th>ATK</th>
                  <th>CRIT</th>
                  <th>DEF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data[0].stats.HP}</td>
                  <td>{data[0].stats.ATK}</td>
                  <td>{data[0].stats.Crit}</td>
                  <td>{data[0].stats.DEF}</td>
                </tr>
              </tbody>
            </Table>
            </StyledTable>
            <>
              <StyledHeader>2-Piece Set</StyledHeader>
              <p>{data[0].setBonus[0]}</p>
              <StyledHeader>4-Piece Set</StyledHeader>
              <p>{data[0].setBonus[1]}</p>
            </>
            <Row>
              {data[0].portrait.map((item, index) =>
                <Col key={index}>
                  <img className='img-fluid mx-auto d-block img-table' src={item} alt={item} />
                </Col>
              )}
            </Row>
            <>
              <StyledHeader>Story I</StyledHeader>
              <p>{data[0].stories[0]}</p>
              <StyledHeader>Story II</StyledHeader>
              <p>{data[0].stories[1]}</p>
            </>
          </div>
          <Divider />
          <CommentSection cID={memName} />
      </div>
  )
}

export default MemoryDetail
