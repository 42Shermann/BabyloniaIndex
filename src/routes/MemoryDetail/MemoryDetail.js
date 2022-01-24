import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { api } from '../../config'

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
          setData(json)
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
            <h2>{data[0].name}</h2>
          </div>
        : <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
      }
      </div>
  )
}

export default MemoryDetail
