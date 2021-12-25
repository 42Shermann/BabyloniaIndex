import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import Table from 'react-bootstrap/Table';
import './weaponList.css'
import Spinner from 'react-bootstrap/esm/Spinner';

function WeaponList() {

    const [loading, setLoading] = useState(true);
    const [DATA, setData] = useState([]);
    const [wepType, setType] = useState([]);

    const fetchData = async ()=>{
        try{
        const response = await fetch(`${api}/api/weapon`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }});
    
        const json = await response.json();

        //Get weapon type
        const unique = [...new Set(json.map(item => item.type))];
        setType(unique);
        //
        setData(json);
        setLoading(false);
    
      }catch(e){console.log(e);}
     }

    useEffect(() => {
        fetchData();
    }
    ,[])


    return (
        <div>
            {wepType.length === 0 && loading ?
            <div className="text-center">
                <Spinner animation="border" variant="light" />
            </div>
            :
            <>
            {wepType.map(((type, index) =>(
            <>
            <h3 className="text-white" key={index}>{type}</h3>
            <Table>
                <thead>
                    <tr className="bg-danger">
                        <th>Weapon</th>
                        <th>Ability</th>
                        <th>ATK</th>
                        <th>CRIT</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {DATA.filter(data => data.type === type).map(data =>(
                    <tr className='align-middle' key={data.id}>
                        <td>
                            <div className='row'>
                                <img src={data.img} alt={data.name} className='weapon-img-thumb' />
                            </div>
                            <div className='row'>
                                <p className='text-center'>{data.name}</p>
                            </div>
                        </td>
                        <td>{data.ability}</td>
                        <td >{data.atk}</td>
                        <td>{data.crit}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </>
            )))}
            </>
            }
        </div>
    );
}

export default WeaponList;