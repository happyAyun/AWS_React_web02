import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

function MenuDetail(props) {
  const [dataList, setDataList] = useState([]);

  // props.setArticleId('asdkasldknasdlksannl');

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://localhost:8000/api/book/article/1/', {
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
        <div>
          <div>
            <Link to={{
              pathname: `/Article/${post.article_id}`,
              state: {
                id: `${post.article_id}`,
              }
            }} style={{textDecoration: 'none'}}>
            <button className="movie__title" onClick={()=>{
              props.setArticleId(post.article_id);
              window.location.reload();
            }}>id : {post.article_id} title :{post.article_title}</button>
            </Link>
          </div>
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