import React from 'react';
import {Button, Icon, Image, Item, Menu} from 'semantic-ui-react';
import {Grid, Header, Ref, Segment, Sidebar} from 'semantic-ui-react';
import Chart from './Chart';
import './MyProfile.css';
import {Link, Route} from 'react-router-dom';
import EditProfile from './EditProfile';

function MyPage(props) {
  const segmentRef = React.useRef();
  const [visible, setVisible] = React.useState(false);
  const paragraph = <Image src='' />;
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
                                          <img className="profile" src="" />
                                      </div>
                                      <Item.Content>
                                          <Item.Header as='a'>
                                              <div className="name">Choi</div>
                                          </Item.Header>
                                          <Item.Meta>
                                              <div className="content">IFC</div>
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
