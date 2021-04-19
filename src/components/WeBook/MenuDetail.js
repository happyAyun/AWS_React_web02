import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, ButtonBase, Grid, Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

function MenuDetail(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://localhost:8000/api/book/article/deatil/1', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);

  const renderBooks = dataList.map((post) => {
    return (
        <div className="container">
          {console.log(dataList)}
        </div>
    );
  });
  return (
      <div>
        {renderBooks}
      </div>
  );
}

export default MenuDetail;
