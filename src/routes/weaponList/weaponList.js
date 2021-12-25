import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import api from '../../services/api';
import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/esm/Spinner';
import './weaponList.css'

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
            <div>
                <h2>Weapons List</h2>
            </div>
            <div className='mb-4'>
                <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="panel-header">Contents</Accordion.Header>
                    <Accordion.Body className="panel-body">
                    <ListGroup variant="flush">
                        {wepType.map(((type, index) =>(
                            <NavHashLink
                            key={index}
                            to={`/weapons/#${type}`}
                            >
                                <ListGroup.Item >{type}</ListGroup.Item>
                            </NavHashLink>
                        )))
                            }
                    </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
            {wepType.length === 0 && loading ?
            <div className="text-center">
                <Spinner animation="border" variant="light" />
            </div>
            :
            <>
            {wepType.map(((type, index) =>(
            <>
            <h3 id={type} className="text-white" key={index}>{type}</h3>
            <Table>
                <thead>
                    <tr className="bg-danger">
                        <th>Weapon</th>
                        <th>Ability</th>
                        <th>ATK</th>
                        <th>CRIT</th>
                        <th>Signature</th>
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
                        <td>{data.atk}</td>
                        <td>{data.crit}</td>
                        <td>
                            <Link className="styledLink" to={`/detail/${data.const.cID}`}>
                            <div className='row'>
                                <img src={data.const.img} alt={data.const.Model} className='weapon-img-thumb' />
                            </div>
                            <div className='row'>
                                <p className='text-center'>{data.const.Model}</p>
                            </div>
                            </Link>
                        </td>
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