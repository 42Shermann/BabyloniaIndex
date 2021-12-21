import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Cards({ data }) {

        const display = data.map(data=>(
            <div key={data.id} className="car-container" >
                <Link  to={`/detail/${data.id}`}>
                    <div >
                        <img src={data.img} alt={data.Model} className="thumb-post-img"/>
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