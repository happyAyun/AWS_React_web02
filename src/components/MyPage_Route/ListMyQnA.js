import React from 'react';
import { Message, Button } from 'semantic-ui-react';

function ListMyQnA(props) {
  return (
        <div>
            <Message>
                <Message.Header>Changes in Service</Message.Header>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
                <Button style={{marginLeft: '600px'}} content='질문 보기' />
            </Message>
        </div>
  );
}

export default ListMyQnA;
