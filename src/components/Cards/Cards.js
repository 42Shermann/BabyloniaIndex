import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Cards({ data }) {

        const display = data.map((data, index)=>(
            <div key={index} className="car-container" >
                <Link  to={`/characters/${data.cID}`}>
                    <div >
                        <img src={data.chibiImg.avatar} alt={data.Model} className="img-fluid thumb-post-img"/>
                    </div>
                </Link>
            </div>
            
        ))

    return (
        <div className="card-grid">
            {display}
        </div>
    );
}

export default Cards;