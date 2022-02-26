import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import ConstrDetail from './CharacterDetailComponent'
import DetailPlaceholder from './DetailPlaceholder'
import { api } from '../../config'
import { Error } from '../../components'

function CharsDetail () {
  const { userId } = useParams()

  const { isLoading, error, data } = useQuery(['charsList', userId], () =>
    fetch(
      `${api}/api/construct/${userId}`
    ).then((res) => res.json())
  )

  if (isLoading) {
    return <DetailPlaceholder />
  }

  if (!data.length || error) {
    return <div>
        <Error />
      </div>
  }

  return (
    <ConstrDetail data={data[0]}/>
  )
}

export default CharsDetail
