import React from 'react';
import './NotFound.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function NotFound(props) {
    return (
        <div>
            <Row>
                <Col>
                    <div >
                        <img className="img-notFound mx-auto d-block" src="https://gdurl.com/rjM0" alt="AylaNo"/>
                    </div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <h2 className="text-center text-white my-4">404 Error</h2>
                </Col>
            </Row>
        </div>
    );
}

export default NotFound;