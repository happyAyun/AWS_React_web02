import React, {useEffect, useState} from 'react';
import {
  Grid,
  Header,
  Image,
  Ref,
  Segment,
} from 'semantic-ui-react';

import axios from 'axios';

function MemoDetail({location}) {
  const [detail, setDetail] = useState();
  const memoId = location.state.memoId;

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://localhost:8000/api/memo/detail/' + memoId + '/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      setDetail(data);
    };
    take();
  }, []);
  // console.log(detail);
  return (
     <Grid columns={1}>
        <Grid.Column>
              <Segment secondary>
                <Header as='h3'>{detail.memoId}</Header>
                <p>When you will click there, the sidebar will be closed.</p>
              </Segment>

            <Segment>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
        </Grid.Column>
      </Grid>
  );
}

export default MemoDetail;
