import React, {useState} from 'react';
import {
  Button,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import './Article.css';
import Verticalsidebarmenu from './Verticalsidebarmenu';
import Verticalsidebarmemo from './Verticalsidebarmemo';
import Verticalsidebarqna from './Verticalsidebarqna';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible, key: action.key };
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed };
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

function Article(props) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'scale down',
    direction: 'right',
    dimmed: false,
    visible: false,
    key: ''
  });

  const { animation, dimmed, direction, visible, key} = state;
  const vertical = direction === 'bottom' || direction === 'top';

  return (
          <div className='container'>
              <div className='buttons'>
                  <div className='padding'>
                      <Button style={{backgroundColor: '#BF8450'}} size='big' color='olive' animated='vertical' onClick={() => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down', key: 'menu'})
                      } >
                          <Button.Content hidden>메뉴</Button.Content>
                          <Button.Content visible>
                              <Icon name='bars' />
                          </Button.Content>
                      </Button>
                  </div>
                  <div className='padding'>
                      <Button style={{backgroundColor: '#BF8450'}} size='big' color='olive' animated='vertical' onClick={() => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down', key: 'memo'})
                      }>
                          <Button.Content hidden>메모장</Button.Content>
                          <Button.Content visible>
                              <Icon name='sticky note outline' />
                          </Button.Content>
                      </Button>
                  </div>
                  <div className='padding'>
                      <Button style={{backgroundColor: '#BF8450'}} size='big' color='olive' animated='vertical' onClick={() => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down', key: 'qna'})
                      }>
                          <Button.Content hidden>Q&A</Button.Content>
                          <Button.Content visible>
                              <Icon name='question circle outline' />
                          </Button.Content>
                      </Button>
                  </div>
              </div>
              <div>
            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden'}}>
              {
                  key === 'menu'
                    ? <Verticalsidebarmenu
                         animation={animation}
                         direction={direction}
                         visible={visible}
                     /> : console.log('error')
               }
                {
                    key === 'memo'
                      ? <Verticalsidebarmemo
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        /> : console.log('error')
                }
                {
                key === 'qna'
                  ? <Verticalsidebarqna
                        animation={animation}
                        direction={direction}
                        visible={visible}
                    /> : console.log('error')
            }

              <Sidebar.Pusher dimmed={dimmed && visible}>
                  <div className={visible === true ? 'contentsss' : 'contents'}>
                      divsdlakdmlsak
                  </div>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            </div>
          </div>

  );
}

export default Article;
