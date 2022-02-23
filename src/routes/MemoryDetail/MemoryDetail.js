import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Col, Row, Spinner, Table } from 'react-bootstrap'
import { StyledTable, StyledHeader, ImgContainer } from './style'
import { api } from '../../config'
import cloudEdit from '../../utils/CloudinaryImage'

function MemoryDetail () {
  const navigate = useNavigate()
  const { memName } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/api/memory/${memName}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()

        if (json.length === 0) {
          navigate('/404')
        } else {
          setData(json[0])
          setLoading(false)
        }
      } catch (e) { console.log(e) }
    }

    fetchData()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [])

  return (
      <div>
      {!isLoading
        ? <div>
            <ImgContainer>
              <h2 className='sr-only'>{data.name}</h2>
              <img className='img-fluid mx-auto d-block' src={cloudEdit(data.portrait[0])} alt={data.name} />
              <p className='centered display-3'>{data.name}</p>
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
                  <td>{data.stats.HP}</td>
                  <td>{data.stats.ATK}</td>
                  <td>{data.stats.Crit}</td>
                  <td>{data.stats.DEF}</td>
                </tr>
              </tbody>
            </Table>
            </StyledTable>
            <>
              <StyledHeader>2-Piece Set</StyledHeader>
              <p>{data.setBonus[0]}</p>
              <StyledHeader>4-Piece Set</StyledHeader>
              <p>{data.setBonus[1]}</p>
            </>
            <Row>
              {data.portrait.map((item, index) =>
                <Col key={index}>
                  <img className='img-fluid mx-auto d-block img-table' src={item} alt={item} />
                </Col>
              )}
            </Row>
            <>
              <StyledHeader>Story I</StyledHeader>
              <p>{data.stories[0]}</p>
              <StyledHeader>Story II</StyledHeader>
              <p>{data.stories[1]}</p>
            </>
          </div>
        : <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
      }
      </div>
  )
}

export default MemoryDetail
