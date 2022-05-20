import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Row, Col, Button, Stack, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { api } from '../config'

const StyleWrapper = styled.div`
  .heading-text {
    font-size: larger;
    font-weight: bold;
  }
  .sub-text {
    color: gray;
    margin-top: 5px;
  }
  .centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const CommentSection = ({ cID }) => {
  const [isCommentVisible, setVisible] = useState(false)
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery(['allComments', cID], () =>
    fetch(
      `${api}/api/comment/${cID}`
    ).then((res) => res.json()), {
    initialData: [],
    enabled: isCommentVisible
  }
  )

  const Mutation = useMutation(newComment => {
    return fetch(`${api}/api/comment/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
  }, {
    onSettled: () => {
      queryClient.invalidateQueries('allComments')
    }
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    const values = {
      userName: data.userName,
      comment: data.comment,
      const: cID
    }
    Mutation.mutate(values)
    reset()
  }

  return (
    <StyleWrapper className='mb-4'>
      <h3>Discussion</h3>
      {isCommentVisible
        ? <div >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId="discussForm">
            <Form.Control as="textarea" rows={3} {...register('comment', { required: true })} placeholder={errors?.comment?.type === 'required' ? 'This field is required' : 'Tell us anything!' }/>
          </Form.Group>
        </Row>
        <Row className='mt-3'>
          <Col xs="auto">
            <Form.Label htmlFor="userName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="userName" {...register('userName', { required: true })} placeholder={errors?.userName?.type === 'required' ? 'This field is required' : 'Name' }/>
          </Col>
          <Col>
            <div className='mt-4 mt-sm-0'>
              <Button type="submit">
                Submit
              </Button>
              <Button onClick={() => setVisible(false)} className='mx-4'>
                Hide comments
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    {Mutation.isLoading || isLoading
      ? <div className="text-center">
            <Spinner animation="border" variant="light" />
      </div>
      : data.map(item => (
      <div key={item.id} className='mt-4'>
        <Row>
          <Stack direction="horizontal" gap={3}>
            <p className='heading-text'>{item.userName}</p>
            <p className='sub-text'>{new Date(item.date).toDateString()}</p>
          </Stack>
        </Row>
        <Row>
          <p>{item.comment}</p>
        </Row>
      </div>
      ))}
   </div>
        : <div className='centered-container mt-4 mt-sm-0'>
      <Button onClick={() => setVisible(true)} >Show comments</Button>
    </div>
    }
    </StyleWrapper>
  )
}

export default CommentSection
