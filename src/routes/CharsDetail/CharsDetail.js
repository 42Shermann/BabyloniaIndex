import {useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useParams } from 'react-router-dom';
import ConstrDetail from '../../components/ConstrDetail/ConstrDetail';
import api from '../../services/api';
import './CharsDetail.css';

function CharsDetail() {

  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchData = async ()=>{
      try{
      const response = await fetch(`${api}/api/construct/${userId}`, {
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

    fetchData();
  }
  ,[userId])

  return(
    <>
    {(!loading)? (
      <ConstrDetail data={data[0]}/>
  ):(
    <div className="text-center">
      <Spinner animation="border" variant="light" />
    </div>
  )}
    </>
  );}

export default CharsDetail;