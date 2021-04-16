import React, {useEffect, useState} from 'react';
import { Message, Button } from 'semantic-ui-react';
import { ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';
import QnADetail from '../MyPage/QnA/QnADetail';

const postList = [
  {
    no: 1,
    title: '질문1',
    content: '질문내용',
    img: 'image',
    book: '책이름'
  },
  {
    no: 2,
    title: '질문2',
    content: '질문내용2',
    img: 'image2',
    book: '책이름2'
  },
];

function ListMyQnA(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
        <div className="qnabox">
            <Message>
                <Message.Header>내 질문모임집</Message.Header>
                {
                    dataList ? dataList.map((item, index) => {
                      return (
                    <Link to='/mypage/QnADetail'>
                    <ListItem button>
                    <ListItemText primary={item.title} style={{width: '500px'}}/>
                    </ListItem>
                    </Link>
                      );
                    })
                      : ''
                }
            </Message>
        </div>
  );
}

export default ListMyQnA;
