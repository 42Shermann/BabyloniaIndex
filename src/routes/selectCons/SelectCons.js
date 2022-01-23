import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import api from '../../services/api'
import { RANK } from '../../constants/DATA'
import { Stack, Spinner, Form } from 'react-bootstrap'
import Cards from '../../components/Cards/Cards'

function SelectCons () {
  const [loading, setLoading] = useState(true)
  const [DATA, setData] = useState([])
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch(`${api}/api/construct/getList`, {
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
  const queryData = DATA.filter(post => (
    query === ''
      ? post
      : post.cID.toLowerCase().includes(query.toLowerCase())
  ))

  return (
    <div >
    <div>
      <Outlet />
    </div>
    {!loading
      ? <div>
      <Stack direction='horizontal' gap={2}>
        <div>
          <Form.Group>
            <Form.Label visuallyHidden={true}>Search for construct</Form.Label>
            <Form.Control type="email" placeholder="Construct Search" onChange={event => setQuery(event.target.value)} />
          </Form.Group>
        </div>
        <div>
        <Form.Group>
          <Form.Label visuallyHidden={true}>Type filter</Form.Label>
          <Form.Select onChange={event => setType(event.target.value)}>
            <option value={''}>All</option>
            <option value={'Attacker'}>Attacker</option>
            <option value={'Tank'}>Tank</option>
            <option value={'Support'}>Support</option>
            <option value={'Amplifier'}>Amplifier</option>
            <option value={'Pioneer'}>Pioneer</option>
          </Form.Select>
        </Form.Group>
        </div>
      </Stack>
      {RANK.map((item, index) => (
      <div key={index} className='my-2'>
        <h5 className="text-white">{item.rank}</h5>
        <Cards data={queryData
          .filter(data => data.rank === item.rank)
          // Return all if type filter is empty
          .filter(data => type === '' ? data.type.length > 0 : data.type === type)}/>
      </div>
      ))}
    </div>
      : <div className="text-center">
        <Spinner animation="border" variant="light" />
      </div>
    }
    </div>
  )
}

export default SelectCons
