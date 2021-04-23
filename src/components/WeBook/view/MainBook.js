import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function MainBook(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://localhost:8000/api/book/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);

  // eslint-disable-next-line array-callback-return
  const doc = dataList.map((post) => {
    return (
          <div>
            <Link to={{
              pathname: '/List/',
              state: {
                bookId: post.bookId
              }
            }}>
            {post.bookId}
              <button value={post.bookId} onClick={(e)=>{
                console.log(e.target.value);
                axios.post('http://localhost:8000/api/memo/create/', {
                  data: {
                    bookId: post.bookId
                  }
                }, {
                  headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                  }
                });
                console.log(post.bookId);
              }}>책 목록 보기</button>
            </Link>
          </div>

    );
  });

  return (
        <div>
          { dataList
            ? (
                <div>
                  {doc}
                </div>
            )
            : (
                  <div>
                    none
                  </div>
            )}
        </div>
  );
}

export default MainBook;
