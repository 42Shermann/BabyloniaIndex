import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ConstrDetail from './CharacterDetailComponent'
import DetailPlaceholder from './DetailPlaceholder'
import { api } from '../../config'

function CharsDetail () {
  const navigate = useNavigate()
  const { userId } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/api/construct/${userId}`, {
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
  , [userId])

  return (
  <>
  {!loading
    ? (
      <ConstrDetail data={data[0]}/>
      )
    : (
    <div>
      <DetailPlaceholder />
    </div>
      )
  }
  </>
  )
}

export default CharsDetail
