import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function NotFound () {
  const navigate = useNavigate()
  return (
    <div>
      <Row>
        <Col>
          <div >
            <img className="img-notFound mx-auto d-block mb-4" src="https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640447688/banner/1637393088614_wnzy9t.png" alt="AylaNo"/>
          </div>
        </Col>
      </Row>
      <Row >
        <Col>
          <h1 className="display-3">An error has occurred!</h1>
        </Col>
      </Row>
      <Row>
        <p className="lead text-center">
          The page you&apos;re looking for may not exists.
        </p>
      </Row>
      <Row>
        <>
        <Button variant="light" onClick={ () => navigate('/') }>Return to main page</Button>
        </>
      </Row>
    </div>
  )
}

export default NotFound
