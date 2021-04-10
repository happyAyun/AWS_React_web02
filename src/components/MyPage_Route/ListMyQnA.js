import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import QnADetail from '../MyPage/QnA/QnADetail';

function ListMyQnA(props) {
  return (
        <div>
            <Message>
                <Message.Header>Changes in Service</Message.Header>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
                <Link to='/mypage/QnADetail'><Button style={{marginLeft: '600px'}} content='질문 보기' /></Link>
            </Message>
        </div>
  );
}

export default ListMyQnA;
