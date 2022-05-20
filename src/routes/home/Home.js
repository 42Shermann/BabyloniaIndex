import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap/'
import './Home.css'
import { useCountdown } from '../../hooks'
import { IMAGES } from '../../constants'

function Home () {
  const [days, hours, minutes] = useCountdown('July 7, 2022')

  return (
    <Container fluid className='mb-4'>
      <Row>
        <Col>
          <img className="banner-container img-fluid mx-auto d-block mb-4" src='https://res.cloudinary.com/dyfbbcvhc/image/upload/v1652971291/banner/l0grhfy56gtu0v6cy6-1636441155828%E5%AE%98%E7%BD%91%E5%9B%BE%E7%89%87_89_yycu5u.webp' alt='banner' />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bg-danger text-center">
            <h1>Fake Ascension</h1>
          </div>
          <h2>Event Coundown: {days} Days, {hours} Hours and {minutes} minutes</h2>
        </Col>
      </Row>
      <Row>
        <Col className='menu-grid'>
          <div className='manu-container'>
            <Image className='menu-image' thumbnail={true} src={IMAGES.GrayRaven}/>
          </div>
          <div className='manu-container'></div>
          <div className='manu-container'></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-white'><strong>Punishing: Gray Raven</strong> (Chinese: 战双帕弥什, Japanese: パニシング：グレイレイヴン) or simply PGR is a 3D post-apocalyptic and sci-fi action RPG developed and published by Kuro Game (库洛游戏). It was first released in China on December 5, 2019 and a year later on December 4, 2020 in Japan. The global release debuted on July 16, 2021.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="videoWrapper">
          <iframe src='https://www.youtube.com/embed/Tj7fSPgBSUw'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
