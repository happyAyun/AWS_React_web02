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
  const [detail, setDetail] = useState([]);
  const memoId = location.state.memoId;

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/memo/detail/' + memoId + '/', {
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
              </Segment>

            <Segment>
              <Header as='h3'>{detail.memoTitle}</Header>
                {detail.memoContent}
            </Segment>
        </Grid.Column>
      </Grid>
  );
}

export default MemoDetail;
