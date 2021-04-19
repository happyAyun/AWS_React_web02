import React, {useEffect, useState} from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

function ListWrite(props) {
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

  return (

        <div>

          { console.log(dataList) }
            <div>
                <Link to='/mypage/MakeBook'>
                    <Button>책 만들기</Button>
                </Link>
            </div>
            <div className=''>
            <Grid columns={3}>
            {
                dataList ? dataList.map((item) => {
                  return (
                      <Link to={`mypage/ListWrite/${item.book_id}`}>
                                <Card>
                                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false}/>
                                    <Card.Content>
                                        <Card.Header>{item.book_title}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{item.book_writter}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                          {item.book_publisher}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user'/>
                                          {item.book_like}
                                        </a>
                                    </Card.Content>
                                </Card>
                      </Link>
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
