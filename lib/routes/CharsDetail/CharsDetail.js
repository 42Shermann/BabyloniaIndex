import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConstrDetail from '../../components/ConstrDetail/ConstrDetail';
import { useRealmApp } from '../../services/realmApp';
import './CharsDetail.css';

function CharsDetail() {
  const app = useRealmApp();
  const {
    userId
  } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // eslint-disable-next-line

  useEffect(async () => {
    try {
      setLoading(true);
      const fetchData = await app.getConsDetail(userId);
      setData(() => fetchData);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  } // eslint-disable-next-line
  , [userId]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, !loading ? /*#__PURE__*/React.createElement(ConstrDetail, {
    data: data
  }) : /*#__PURE__*/React.createElement("diV", {
    className: "text-center"
  }));
}

export default CharsDetail;