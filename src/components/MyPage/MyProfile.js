import React, {useEffect, useState} from 'react';
import {Button, Icon, Image, Item, Menu} from 'semantic-ui-react';
import {Grid, Header, Ref, Segment, Sidebar} from 'semantic-ui-react';
import Chart from './Chart';
import './MyProfile.css';
import {Link, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

function MyPage() {
  const segmentRef = React.useRef();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const take = async () => {
      await axios.get('http://localhost:8000/user/current/', {headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }}).then(async response => {
        if (response.data) {
          await axios.patch('http://localhost:8000/user/auth/profile/' + response.data.id + '/update/', {}, {
            headers:
                          {
                            Authorization: `JWT ${localStorage.getItem('token')}`
                          }
          }
          ).then(response => {
            setProfile({
              nickname: response.data.nickname,
              photo: response.data.photo,
              myInfo: response.data.myInfo
            });
          });
        }
      });
    };
    take();
  }, []);
  return (
      <>
      <div>
          <div className="profilebox" style={{display: 'flex'}}>
                <div style={{paddingRight: '100px'}}>
                </div>
              <Grid columns={1}>
                  <Grid.Column>
                      <Sidebar.Pushable as={Segment.Group} raised>
                          <Ref innerRef={segmentRef}>
                              <Segment secondary>
                                  <Header as='h3'>Profile</Header>
                              </Segment>
                          </Ref>

                          <Segment>
                              <Item.Group divided>
                                  <Item>
                                      <div className="box">
                                          <img className="profile" src={profile.photo} />
                                      </div>
                                      <Item.Content>
                                          <Item.Header as='a'>
                                              <div className="name">{profile.nickname}</div>
                                          </Item.Header>
                                          <Item.Meta>
                                              <div className="content">{profile.myInfo}</div>
                                          </Item.Meta>
                                          <Item.Extra>
                                              <div>
                                              <Link to='/mypage/EditProfile'>
                                                  <Button floated='right' basic color='yellow' style={{marginLeft: '400px'}}>
                                                      프로필 수정하기
                                                      <Icon name='right chevron' />
                                                  </Button>
                                              </Link>
                                              </div>
                                          </Item.Extra>
                                      </Item.Content>
                                  </Item>
                              </Item.Group>
                          </Segment>
                      </Sidebar.Pushable>
                  </Grid.Column>
              </Grid>
            </div>
          <div>
              <Chart/>
          </div>
      </div>
      </>
  );
}

export default MyPage;
