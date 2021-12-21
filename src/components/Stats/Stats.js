import React from 'react';
import './Stats.css'

function Stats({ info, statDetails, tag }) {

    const { serviceTime, psychologicalAge, activationDate, height, weight, vitalFluidType} = info;
    const { stats, chart } = statDetails;
    const  {rank, type, faction, gift } = tag;

    return (
        <div>
            <div className="container-fluid text-white stats-bg">
            <div>
                <h2 className="text-center align-middle my-2">Info and Stats</h2>
            </div>
            <div className="row">
                <div className="mb-4 border border-top border-white" />
            </div>
            <div className="row my-4">
                <div className="col-6">
                    <div className="row">
                        <strong>Service Time</strong>
                        <p>{serviceTime}</p>
                    </div>
                    <div className="row">
                        <strong>Psychological Age</strong>
                        <p>{psychologicalAge}</p>
                    </div>
                    <div className="row">
                        <strong>Activation Date</strong>
                        <p>{activationDate}</p>
                    </div>    
                    <div className="row">
                        <strong>Height</strong>
                        <p>{height}</p>
                    </div>
                    <div className="row">
                        <strong>Weight</strong>
                        <p>{weight}</p>
                    </div>    
                    <div className="row">
                        <strong>Vital Fluid Type</strong>
                        <p>{vitalFluidType}</p>
                    </div>
              </div>
                <div className="col-6 border-start border-white">
                    <div className="row">
                        <img className="img-fluid" src={chart} alt="Chart"/>
                    </div>
                    <div className="row text-center">
                        <div className="col ">
                            <strong>HP</strong>
                            <p>{stats.HP}</p>
                        </div>
                        <div className="col ">
                            <strong>DEF</strong>
                            <p>{stats.DEF}</p>
                        </div>
                        <div className="col">
                            <strong>ATK</strong>
                            <p>{stats.ATK}</p>
                        </div>
                        <div className="col">
                            <strong>CRIT</strong>
                            <p>{stats.CRIT}</p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="my-4 border border-top border-white" />
            </div>
            <div className="px-2 row text-center type-container ">
              <div className="col">
                <p>Class</p>
                <img className="types-icon mx-auto d-block" src={type.img} alt={type.type}/>
                <p>{type.type} </p>
                </div>
              <div className="col">
                <p>Rank</p>
                <img className="types-icon mx-auto d-block" src={rank.img} alt={rank.rank}/>
                  <p>{rank.rank} Rank</p>
              </div>
              <div className="col">
                <p>Faction</p>
                <img className="types-icon mx-auto d-block inverted-img" src={faction.img} alt={faction.name}/>
                  <p>{faction.name}</p>
              </div>
              <div className="col">
                <p>Favorite Gift</p>
                <img className="types-icon mx-auto d-block" src={gift.img} alt={gift.type}/>
                  <p>{gift.type}</p>
              </div>
            </div>
            <div className="row">
                <div className="mb-4 border border-top border-white" />
            </div>
          </div>

        </div>
    );
}

export default Stats;