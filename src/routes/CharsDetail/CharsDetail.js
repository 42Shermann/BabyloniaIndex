import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ConstrDetail from '../../components/ConstrDetail/ConstrDetail';
import DetailPlaceholder from '../../components/ConstrDetail/detailPlaceholder';
import api from '../../services/api';
import './CharsDetail.css';

function CharsDetail() {

  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    setLoading(true);

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
    <div>
      <DetailPlaceholder />
    </div>
  )}
    </>
  );}

export default CharsDetail;