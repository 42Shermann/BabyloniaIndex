import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import api from '../../services/api';
import { RANK } from '../../constants/DATA';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import './SelectCons.css'
import Cards from '../../components/Cards/Cards';


function SelectCons() {

    const [loading, setLoading] = useState(true);
    const [DATA, setData] = useState([]);
    const [query, setQuery] = useState("")

    const fetchData = async ()=>{
        try{
        const response = await fetch(`${api}/api/construct`, {
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
            <Form>
            <Form.Group className="mb-3 search-bar" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Construct Search" onChange={event => setQuery(event.target.value)} />
            </Form.Group>
            </Form>
            {RANK.map(item => (
            <div>
                <h5 className="text-white">{item.rank}</h5>
                <Cards data={queryData.filter(data => data.rank === item.rank)}/>
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