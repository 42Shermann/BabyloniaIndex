import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Cards ({ data }) {
  const StyledCard = styled.div`
  .thumb-post-img {
  object-fit: cover; /* keep aspect ratio */
  width: 100%;
  max-height: 100%;
}

.car-container {
  overflow: hidden;
  background-color: #212129;
  width: 100px;
  height: 100px;
  margin: 0px;
  padding: 0px;
}

.car-container:hover {
  transition: 0.3s;
  background-color: rgb(153, 28, 28);
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
`
  const display = data.map((data, index) => (
    <div key={index} className="car-container" >
      <Link to={`/characters/${data.cID}`}>
        <div >
            <img src={data.chibiImg.avatar} alt={data.Model} className="img-fluid thumb-post-img"/>
        </div>
      </Link>
    </div>
  ))

  return (
    <StyledCard>
      <div className="card-grid">
        {display}
      </div>
    </StyledCard>
  )
}

export default Cards
