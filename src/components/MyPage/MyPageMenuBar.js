import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
function MyPageMenuBar() {
  const [state, setState] = useState({});
  const handleItemClick = (e, {name}) => setState({activeItem: name});
  return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>나의 학습관리</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='나의 수강 목록'
                            active={state.activeItem === '나의 수강 목록'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='나의 메모장'
                            active={state.activeItem === '나의 메모장'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='나의 Q&A'
                            active={state.activeItem === '나의 Q&A'}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>나의 등록한 책</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='내가 등록한 책'
                            active={state.activeItem === 'rails'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='나에게 온 Q&A'
                            active={state.activeItem === 'python'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='수강평 확인하기'
                            active={state.activeItem === 'php'}
                            onClick={handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>나의 커뮤니케이션 활동</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='나의 게시글'
                            active={state.activeItem === 'shared'}
                            onClick={handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>내 정보</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='개인정보수정'
                            active={state.activeItem === 'email'}
                            onClick={handleItemClick}
                        >
                        </Menu.Item>

                        <Menu.Item
                            name='프로필 수정'
                            active={state.activeItem === 'faq'}
                            onClick={handleItemClick}
                        >
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </div>
  );
}

export default MyPageMenuBar;
