import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import Placeholder from 'react-bootstrap/Placeholder'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


function DetailPlaceholder() {
    return (
        <div className="container-fluid bg-color">
        <div>
        <Placeholder as="p" animation="glow">
            <Placeholder xs={12} className="h1 text-white text-center text-bold"/>
        </Placeholder>
        </div>
        <div>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="main-tab" >
          <Tab eventKey="overview" title="Overview">
          <div className="row">
              <div className="bg-white my-3 ">
                <figure class="text-start ">
                <Placeholder as={'blockquote'} class="blockquote my-4 lead text-black">
                    <Placeholder  xs={12} animation="glow" />
                </Placeholder>
              </figure>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-xm-12">
                <Spinner animation='glow' variant='light' />
                <div className="spec-bg text-white">
                <div className="py-4">
                  <div className="icon-container">
                    <div>
                      <Spinner animation='glow' variant='light' />
                    </div>
                    <div>
                        <Spinner animation='glow' variant='light' />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-danger text-center">
                    <h4>Speciality</h4>
                  </div>
                  <div className="px-2">
                  <Placeholder as={'p'} />
                  <Placeholder as={'p'} />
                  </div>
                </div>
                <div className="">
                  <div className="bg-danger text-center">
                    <h4>Element</h4>
                  </div>
                  <div className="row text-center">
                    <Placeholder as={'p'} />
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-8 col-xm-12">
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
      </div>
          <div className="row">
            <div className="mb-4 border border-top border-white" />
          </div>
      </div>
    );
}

export default DetailPlaceholder;