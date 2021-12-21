import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { getRank, getType, getFaction, getGift } from '../api/mockdata/DATA';
import TabComp from '../Tab/Tab';
import Stats from '../Stats/Stats';
import './ConstrDetail.css';

function ConstrDetail({data}) {

    const tag = {
        rank:getRank(data.construct.rank),
        type:getType(data.construct.type),
        faction:getFaction(data.construct.faction),
        gift:getGift(data.construct.gift),
      }
    
    //Render element type
    const eleTypes = data.construct.element.map(data=>(
      <div className="col">
        <img className="img-fluid mx-auto d-block" src={data.icon} alt={data.eleType}/>
        <p>{data.eleType}</p>
      </div>
    ))

    return (
        <div className="container-fluid bg-color">
        <div>
          <div className="h1 text-white text-center text-bold">{data.construct.name} : {data.construct.Model}</div>
        </div>
        <div>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="main-tab" >
          <Tab eventKey="overview" title="Overview">
          <div className="row">
              <div className="bg-white my-3 ">
                <figure class="text-start ">
                <blockquote class="blockquote my-4 lead text-black">
                  <em>{data.construct.desc}</em>
                </blockquote>
              </figure>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-xm-12">
                <img className="img-fluid" src={data.construct.img} alt={data.construct.Model} />
                <div className="spec-bg text-white">
                <div className="py-4">
                  <div className="icon-container">
                      <div>
                          <img className="img-type" src={data.construct.chibiImg.awaken} alt="awaken"/>
                          </div>
                          <div>
                          <img className="img-type" src={data.construct.chibiImg.dorm} alt="dorm"/>
                      </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-danger text-center">
                    <h4>Speciality</h4>
                  </div>
                  <div className="px-2">
                  <p>{data.construct.Speciality[0]}</p>
                  <p>{data.construct.Speciality[1]}</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-danger text-center">
                    <h4>Element</h4>
                  </div>
                  <div className="row text-center">
                  {eleTypes}
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-8 col-xm-12">
                <Stats info={data.construct.info} statDetails={data.construct.stats} tag={tag} />
              </div>
            </div>
            <div className="text-white mb-4">
              <div className="bg-danger text-center ">
                <h2>Skills & Passives</h2>
              </div>
              <div>
                <TabComp props={data.construct.skillOrb} type="skill"/>
              </div>
              <div>
                <TabComp props={data.construct.skillPassive} type="skill"/>
              </div>
              <div>
                <TabComp props={data.construct.Rank} type="skill"/>
              </div>
            </div>
            <div className="text-white mb-4">
              <div className="bg-danger text-center ">
                <h2>Signature Weapon</h2>
              </div>
              <div>
              <div className="row align-items-center">
                      <div className="col-12 col-lg-2">
                          <img className="img-fluid mx-auto d-block" src={data.consWep.img} alt="weapon"/>
                      </div>
                  <div className="col-12 col-lg-10">
                      <div className="row mt-1">
                          <h3 className="text-white">
                            {data.consWep.name}
                          </h3>
                      </div>
                      <div className="row">
                          <p>
                          {data.consWep.ability}
                          </p>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            ....
          </Tab>
          <Tab eventKey="contact" title="Info" >
            ....
          </Tab>
        </Tabs>
      </div>
          <div className="row">
            <div className="mb-4 border border-top border-white" />
          </div>
      </div>
    );
}

export default ConstrDetail;