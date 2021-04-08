import React, {useState} from 'react';
import {Item, ItemGroup} from 'semantic-ui-react';
import SearchBar from '../SearchBar.js';
import {Nav} from 'react-bootstrap';
import CreateCommunication from './CreateCommunication';
import {Link} from 'react-router-dom';

function ListCommunication(props) {
  const [search, setSearch] = useState('');

  return (
        <div>

            <Nav>
                <SearchBar />
                <Link to={'/CreateCommunication'}><button>생성</button></Link>
            </Nav>

            <table>
                <ul>
                    <Item.Image size='tiny' src='/images/wireframe/image.png' />
                    <Item.Content>
                        <Item.Header as='a'>Header</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                    ------------
                    <Item.Content>
                        <Item.Header as='a'>Header</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </ul>

            </table>
        </div>
  );
}

export default ListCommunication;
