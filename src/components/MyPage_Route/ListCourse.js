import React, {useEffect, useState} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';

function ListCourse(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://localhost:8000/api/book/signbook/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        }
      });
      setDataList(data);
    };
    take();
  }, []);
  
  return (
        <div>
            {console.log(dataList)}
            {
                dataList ? dataList.map((item) => {
                  return (
                        <Card>
                            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>y</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                  );
                }) : ''
            }

        </div>
  );
}

export default ListCourse;
