import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { StyledTab } from '../../components'

function DetailPlaceholder () {
  const PHStats = () => {
    return (
    <div>
      <div className="container-fluid text-white stats-bg">
        <div>
          <Placeholder as="h2" animation="glow">
            <Placeholder xs={4}/>
          </Placeholder>
        </div>
        <div className="row">
          <div className="mb-4 border border-top border-white" />
        </div>
        <div className="row my-4">
          <div className="col-6">
            <div className="row">
              {/* Service Time */}
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4}/>
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={2}/>
              </Placeholder>
            </div>
            <div className="row">
              {/* Psychological Age */}
              <Placeholder as="p" animation="glow">
                  <Placeholder xs={5}/>
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={2}/>
                </Placeholder>
            </div>
          <div className="row">
            {/* Activation Date */}
            <Placeholder as="p" animation="glow">
              <Placeholder xs={6}/>
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={5}/>
            </Placeholder>
          </div>
          <div className="row">
            {/* Height */}
            <Placeholder as="p" animation="glow">
              <Placeholder xs={3}/>
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={3}/>
            </Placeholder>
          </div>
          <div className="row">
            {/* Weight */}
            <Placeholder as="p" animation="glow">
              <Placeholder xs={3}/>
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={2}/>
            </Placeholder>
          </div>
          <div className="row">
            {/* Vital Fluid Type */}
            <Placeholder as="p" animation="glow">
              <Placeholder xs={5}/>
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={2}/>
            </Placeholder>
          </div>
        </div>
        <div className="col-12 col-md-6  divider">
          <div className='row'>
          {/* Fake Chart */}
          <div className='loading-image mx-2' style={{ height: '300px' }} />
          </div>
          <div className="row text-center">
            <div className="col ">
              {/* HP */}
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
            </div>
            <div className="col ">
              {/* DEF */}
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
            </div>
            <div className="col">
              {/* ATK */}
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
            </div>
            <div className="col">
              {/* CRIT */}
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={5}/>
              </Placeholder>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }

  return (
    <div className="container-fluid bg-color">
    <div className="h1 text-white text-center text-bold">
    <Placeholder as="p" animation="glow">
      <Placeholder xs={6} />
    </Placeholder>
    </div>
    <StyledTab>
    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="main-tab" >
      <Tab eventKey="overview" title="Overview">
      <div className="row">
        <div className="bg-white my-3 ">
        <figure className="text-start ">
        <Placeholder as={'blockquote'} className="blockquote my-4 lead text-black">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} bg="primary"/>
          </Placeholder>
        </Placeholder>
        </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-xm-12">
        {/* Fake Image */}
        <div className='loading-image' style={{ height: '300px' }} />
        <div className="spec-bg text-white">
        <div className="py-4">
          <div className="icon-container" >
          <div className='loading-image' style={{ height: '90px', width: '90px', backgroundColor: 'black' }}/>
          <div className='loading-image' style={{ height: '90px', width: '90px', backgroundColor: 'black' }}/>
          <div className='loading-image' style={{ height: '90px', width: '90px', backgroundColor: 'black' }}/>
          </div>
        </div>
        <div className="">
          <div className="bg-danger text-center">
          <h4>Speciality</h4>
          </div>
          <div className="px-2">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12}/>
          </Placeholder>
          </div>
        </div>
        <div className="">
          <div className="bg-danger text-center">
          <h4>Element</h4>
          </div>
          <div className="row text-center">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={5}/>
          </Placeholder>
          </div>
        </div>
        </div>
        </div>
        <div className="col-md-8 col-xm-12">
        <PHStats />
        </div>
        <div className="col-md-8 col-xm-12">
        <Placeholder as={'p'} />
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
    </StyledTab>
      <div className="row">
      <div className="mb-4 border border-top border-white" />
      </div>
    </div>
  )
}

export default DetailPlaceholder
