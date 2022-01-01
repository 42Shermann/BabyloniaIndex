import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import api from '../../services/api';
import { RANK } from '../../constants/DATA';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import './SelectCons.css'
import Cards from '../../components/Cards/Cards';


function SelectCons() {

    const [loading, setLoading] = useState(true);
    const [DATA, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [type, setType] = useState('');

    const fetchData = async ()=>{
        try{
        const response = await fetch(`${api}/api/construct/getList`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }});
    
        const json = await response.json();

        setData(json);
        setLoading(false);
    
      }catch(e){console.log(e);}
     }

    useEffect(() => {
        fetchData();
    }
    ,[])
    

    const queryData = DATA.filter(post => (
        query === '' ?
        post
        :
        post.cID.toLowerCase().includes(query.toLowerCase())
    ))

    return (
        <div >
        <div>
            <Outlet />
        </div>
        {!loading ? 
        <div>
            <Container>
            <Row className="mb-3 search-bar">
                <Col xs={6} md={2}>
                    <Form.Control type="email" placeholder="Construct Search" onChange={event => setQuery(event.target.value)} />
                </Col>
                <Col xs={6} md={2}>
                <Form.Select onChange={event => setType(event.target.value)}>
                    <option value={''}>All</option>
                    <option value={'Attacker'}>Attacker</option>
                    <option value={'Tank'}>Tank</option>
                    <option value={'Support'}>Support</option>
                    <option value={'Amplifier'}>Amplifier</option>
                    <option value={'Pioneer'}>Pioneer</option>
                </Form.Select>
                </Col>
            </Row>
            </Container>
            {RANK.map((item, index) => (
            <div key={index}>
                <h5 className="text-white">{item.rank}</h5>
                <Cards data={queryData
                    .filter(data => data.rank === item.rank)
                    //Return all if type filter is empty
                    .filter(data => type === '' ? data.type.length > 0 : data.type === type)}/>
            </div>
            ))}    
        </div>
        :
        <div className="text-center">
            <Spinner animation="border" variant="light" />
        </div>
        }
        </div>
    );
}

export default SelectCons;