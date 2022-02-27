import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Row, Col, Button, Stack } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const INITIAL_COMMENTS = [
  {
    id: 1,
    userName: 'blackleopard515',
    date: new Date('2021-09-22T15:14:37.434+00:00'),
    comment: 'got s bianca a sss lucia dawn with alpha'
  },
  {
    id: 2,
    userName: 'orangefrog437',
    date: new Date('2021-09-28T06:47:55.114+00:00'),
    comment: 'me back to make a better than lucia plume-.'
  },
  {
    id: 3,
    userName: 'ticklishlion459 ',
    date: new Date('2021-09-28T06:49:04.313+00:00'),
    comment: "that i'll have almost 10k black cards and i atleast still"
  }
]

const StyleWrapper = styled.div`
  .heading-text {
    font-size: larger;
    font-weight: bold;
  }
  .sub-text {
    color: gray;
    margin-top: 5px;
  }
`

const CommentSection = () => {
  const [fakeComments, setComments] = useState([...INITIAL_COMMENTS])
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    const tempArray = [...fakeComments]
    tempArray.push({
      userName: data.userName,
      date: new Date(),
      comment: data.comment
    })
    setComments([...tempArray])
    reset()
  }

  return (
    <StyleWrapper className='mb-4'>
      <h3>Discussion</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId="discussForm">
            <Form.Control as="textarea" rows={3} placeholder='Tell us anything!' {...register('comment')}/>
          </Form.Group>
        </Row>
        <Row className='mt-3'>
          <Col xs="auto">
            <Form.Label htmlFor="userName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="userName" placeholder="Name" {...register('userName')}/>
          </Col>
          <Col>
            <Button type="submit">
              Submit
            </Button>
          </Col>
        </Row>
     </Form>
     { fakeComments.map(item => (
      <div key={item.id} className='mt-4'>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <p className='heading-text'>{item.userName}</p>
          <p className='sub-text'>{item.date.toDateString()}</p>
        </Stack>
      </Row>
      <Row>
        <p>{item.comment}</p>
      </Row>
      </div>
     ))}
    </StyleWrapper>
  )
}

export default CommentSection
