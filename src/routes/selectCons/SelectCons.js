import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useRealmApp } from '../../services/realmApp';
import Spinner from 'react-bootstrap/Spinner'
import './SelectCons.css'
import Cards from '../../components/Cards/Cards';


function SelectCons() {

    const app = useRealmApp();

    const [loading, setLoading] = useState(true);
    const [DATA, setData] = useState([]);
    
    // eslint-disable-next-line
    useEffect(async()=>{

        const fetchData = await app.getConstrData();
        setData(fetchData);
        setLoading(false);
    }
     // eslint-disable-next-line
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
        <diV className="text-center">
            <Spinner animation="border" variant="light" />
        </diV>}
        </div>
    );
}

export default SelectCons;