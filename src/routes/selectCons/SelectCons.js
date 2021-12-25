import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import api from '../../services/api';
import Spinner from 'react-bootstrap/Spinner'
import './SelectCons.css'
import Cards from '../../components/Cards/Cards';


function SelectCons() {

    const [loading, setLoading] = useState(true);
    const [DATA, setData] = useState([]);

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
    

    const rankS = DATA.filter(data => data.rank === "S");
    const rankA = DATA.filter(data => data.rank === "A");

    return (
        <div >
        <div>
            <Outlet />
        </div>
        {!loading ? 
        <div>
            <div>
                <h5 className="text-white">A Rank</h5>
                <Cards data={rankA}/>
            </div>
            <div>
                <h5 className="text-white">S Rank</h5>
                <Cards data={rankS}/>
            </div>    
        </div>:
        <div className="text-center">
            <Spinner animation="border" variant="light" />
        </div>
        }
        </div>
    );
}

export default SelectCons;