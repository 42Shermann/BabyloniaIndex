import React, {useState, useEffect} from 'react';
import { useRealmApp } from '../../services/realmApp';
import Table from 'react-bootstrap/Table';
import './weaponList.css'
import Spinner from 'react-bootstrap/esm/Spinner';

function WeaponList() {

    const app = useRealmApp();

    const [loading, setLoading] = useState(true);
    const [DATA, setData] = useState([]);
    const [wepType, setType] = useState([]);
    
    // eslint-disable-next-line
    useEffect(async()=>{
        const fetchData = await app.getAllWeapons();
        //Get weapon type
        const unique = [...new Set(fetchData.map(item => item.type))];
        setType(unique);
        //
        setData(fetchData);
        setLoading(false);
    }
     // eslint-disable-next-line
    ,[])


    return (
        <div>
            {wepType.length === 0 && loading ?
            <diV className="text-center">
                <Spinner animation="border" variant="light" />
            </diV>
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