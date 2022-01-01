import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Image from 'react-bootstrap/Image'
import { getRank, getType, getFaction, getGift, getElement } from '../../constants/DATA';
import TabComp from '../Tab/Tab';
import Stats from '../Stats/Stats';
import './ConstrDetail.css';

function ConstrDetail({data}) {

    const tag = {
        rank:getRank(data.rank),
        type:getType(data.type),
        faction:getFaction(data.faction),
        gift:getGift(data.gift),
      } 
      
    const ElementComponent = ({values}) =>{
      const { img } = getElement(values.eleType);
      return(
        <div className="col">
          <img className="img-fluid mx-auto d-block" src={img} alt={values.eleType}/>
          <p>{values.eleType} ({values.icon})</p>
      </div>
      )
    }  
    
    //Render element type
    const RenderElement = 
        data.element.map((value, index) =>
          (
            <ElementComponent key={index} values={value} />
          )
        )

    return (
        <div className="container-fluid bg-color">
        <div>
          <div className="h1 text-white text-center text-bold">{data.name} : {data.Model}</div>
        </div>
        <div>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="main-tab" >
          <Tab eventKey="overview" title="Overview">
          <div className="row">
              <div className="bg-white my-3 ">
                <figure className="text-start ">
                <blockquote className="blockquote my-4 lead text-black">
                  <em>{data.desc}</em>
                </blockquote>
              </figure>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xm-12">
                <img className="img-fluid" src={data.img} alt={data.Model} />
                <div className="spec-bg text-white">
                <div className="py-4">
                  <div className="icon-container">
                      <div>
                        <img className="img-type" src={data.chibiImg.awaken} alt="awaken"/>
                      </div>
                      <div>
                        <img className="img-type" src={data.chibiImg.avatar} alt="avatar"/>
                      </div>
                      <div>
                        <img className="img-type" src={data.chibiImg.dorm} alt="dorm"/>
                      </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-danger text-center">
                    <h4>Speciality</h4>
                  </div>
                  <div className="px-2">
                  <p>{data.Speciality[0]}</p>
                  <p>{data.Speciality[1]}</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-danger text-center">
                    <h4>Element</h4>
                  </div>
                  <div className="row text-center">
                    {RenderElement}
                  </div>
                </div>
                </div>
              </div>
              <div className="col-md-8 col-xm-12">
                <Stats info={data.info} statDetails={data.stats} tag={tag} />
              </div>
            </div>
            <div className="text-white mb-4">
              <div className="bg-danger text-center ">
                <h2>Skills & Passives</h2>
              </div>
              <div>
                <TabComp props={data.skillOrb} type="skill"/>
              </div>
              <div>
                <TabComp props={data.skillPassive} type="skill"/>
              </div>
              <div>
                <TabComp props={data.Rank} type="skill"/>
              </div>
            </div>
            <div className="text-white mb-4">
              <div className="bg-danger text-center ">
                <h2>Signature Weapon</h2>
              </div>
              <div>
              <div className="row align-items-center">
                      <div className="col-12 col-md-2">
                          <img className="img-fluid mx-auto d-block" src={data.sig.img} alt="weapon"/>
                      </div>
                  <div className="col-12 col-md-10">
                      <div className="row mt-1">
                          <h3 className="text-white">
                            {data.sig.name}
                          </h3>
                      </div>
                      <div className="row">
                          <p>
                          {data.sig.ability}
                          </p>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            <Tabs defaultActiveKey={1} id="coating-tab" className='mt-2'>
            {
              data.coating.map(item=>(
                <Tab key={item.id} eventKey={item.id} title={item.name}>
                  <div className='d-flex justify-content-center coating-container'>
                    <Image className='mx-auto d-block' fluid={true} src={item.img} alt={item.name} />
                  </div>
                </Tab>
              )
              )
            }
            </Tabs>
          </Tab>
          <Tab eventKey="contact" title="Info" >
            Under construction!
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