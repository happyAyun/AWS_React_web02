import React from 'react';
import MyPageMenuBar from './MyPageMenuBar';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';
import {
  Checkbox,
  Grid,
  Header,
  Menu,
  Ref,
  Segment,
  Sidebar
} from 'semantic-ui-react';
function MyPage(props) {
  const segmentRef = React.useRef();
  const [visible, setVisible] = React.useState(false);
  const paragraph = <Image src='' />;
  return (
      <div style={{display: 'flex'}}>
            <div style={{paddingRight: '100px'}}>
            <MyPageMenuBar/>
            </div>
          <Grid columns={1}>
              <Grid.Column>
                  <Sidebar.Pushable as={Segment.Group} raised>

                      <Ref innerRef={segmentRef}>
                          <Segment secondary>
                              <Header as='h3'>내 프로필 정보</Header>
                          </Segment>
                      </Ref>

                      <Segment>
                          <Item.Group divided>
                              <Item>
                                  <Item.Image src='' />

                                  <Item.Content>
                                      <Item.Header as='a'>Watchmen</Item.Header>
                                      <Item.Meta>
                                          <span className='cinema'>IFC</span>
                                      </Item.Meta>
                                      <Item.Description>{paragraph}</Item.Description>
                                      <Item.Extra>
                                          <Button floated='right' basic color='yellow' style={{marginLeft: '400px'}}>
                                              프로필 수정하기
                                              <Icon name='right chevron' />
                                          </Button>
                                      </Item.Extra>
                                  </Item.Content>
                              </Item>
                          </Item.Group>
                      </Segment>
                  </Sidebar.Pushable>
              </Grid.Column>
          </Grid>
        </div>
  );
}

export default MyPage;
