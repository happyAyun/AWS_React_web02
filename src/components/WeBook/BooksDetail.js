import React, {useEffect, useState} from 'react';
import axios from 'axios';

function BooksDetail(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get(`http://localhost:8000/api/book/article/detail/${props.article_id}/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);
  return (
        <div>
          <div>
            img : {dataList.article_img}
          </div>
          <div>
            title : {dataList.article_title}
          </div>
          <div>
            content : {dataList.article_content}
          </div>

        </div>
  );
}

export default BooksDetail;
