import React, {useEffect, useState} from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';

const postList = [
  {
    no: 1,
    title: '첫번째 게시글입니다.',
    writer: '첫번째 게시글 내용입니다.',
    publisher: '2021-04-09',
    img: 1
  },
  {
    no: 2,
    title: '두번째 게시글입니다.',
    writer: '두번째 게시글 내용입니다.',
    publisher: '2021-04-09',
    img: 1
  },
  {
    no: 3,
    title: '세번째 게시글입니다.',
    writer: '세번째 게시글 내용입니다.',
    publisher: '2021-04-09',
    img: 2
  }, {
    no: 3,
    title: '세번째 게시글입니다.',
    writer: '세번째 게시글 내용입니다.',
    publisher: '2021-04-09',
    img: 2
  }, {
    no: 3,
    title: '세번째 게시글입니다.',
    writer: '세번째 게시글 내용입니다.',
    publisher: '2021-04-09',
    img: 2
  }, {
    no: 3,
    title: '세번째 게시글입니다.',
    writer: '세번째 게시글 내용입니다.',
    publisher: '2021-04-09',
    img: 2
  },
];

function ListWrite(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
        <div>
            <div>
                <Link to='/mypage/MakeBook'>
                    <Button>책 만들기</Button>
                </Link>
            </div>
            <div className=''>
            <Grid columns={3}>
            {
                dataList ? dataList.map((item, index) => {
                  return (
                                <Card>
                                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false}/>
                                    <Card.Content>
                                        <Card.Header>{item.title}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{item.writer}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                          {item.publisher}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user'/>
                                            좋아요 혹은 구독수 예정
                                        </a>
                                    </Card.Content>
                                </Card>
                  );
                })
                  : ''
            }
            </Grid>
            </div>
        </div>
  );
}

export default ListWrite;
