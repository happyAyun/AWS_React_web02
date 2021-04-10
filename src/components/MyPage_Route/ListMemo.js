import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
const paragraph = <Image src='/images/wireframe/short-paragraph.png' />;

function ListMemo(props) {
  return (
        <div>
          <Item.Group divided>

            <Item>
              <Item.Image src='/images/wireframe/image.png' />

              <Item.Content>
                <Item.Header as='a'>Watchmen</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Link to='/mypage/MemoList'> <button>메모장 보기</button></Link>
                    <Icon name='right chevron' />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
  );
}

export default ListMemo;
