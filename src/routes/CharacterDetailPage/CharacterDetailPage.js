import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import ConstrDetail from './CharacterDetailComponent'
import DetailPlaceholder from './DetailPlaceholder'
import { api } from '../../config'

function CharsDetail () {
  const { userId } = useParams()

  const { isLoading, isSuccess, data } = useQuery(['charsList', userId], () =>
    fetch(
      `${api}/api/construct/${userId}`
    ).then((res) => res.json())
  )
  if (isSuccess) {
    if (!data.length) {
      return <div>
          <p>This page currently does not exist.</p>
        </div>
    }
  }

  return (
  <>
  {!isLoading
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
