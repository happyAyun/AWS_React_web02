import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import ListCourse from '../MyPage_Route/ListCourse';
import ListMemo from '../MyPage_Route/ListMemo';
import ListMyQnA from '../MyPage_Route/ListMyQnA';
import MyProfile from './MyProfile';
function MyPageMenuBar() {
  return (
        <div style={{display: 'flex'}}>
            <Menu vertical >
                <Menu.Item>
                    <Link to='/mypage'><Menu.Header>마이 페이지</Menu.Header></Link>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>나의 학습관리</Menu.Header>

                    <Menu.Menu>
                        <Link to='/mypage/ListCourse'>
                            나의 수강 목록
                        </Link>
                        <br/><br/>
                        <Link to='/mypage/ListMemo'>
                            나의 메모장
                        </Link>
                        <br/><br/>
                        <Link to='/mypage/ListMyQnA'>
                            나의 Q&A
                        </Link>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>나의 등록한 책</Menu.Header>

                    <Menu.Menu>
                        <Link to='/mypage/ListWrite'>
                            내가 등록한 책
                        </Link>
                        <br/><br/>
                        <Link to='/mypage/ListReceivedQnA'>
                            나에게 온 Q&A
                        </Link>
                        <br/><br/>
                        <Link to='/mypage/ListCourseReview'>
                            수강평 확인하기
                        </Link>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>나의 커뮤니케이션 활동</Menu.Header>

                    <Menu.Menu>
                        <Link to='/mypage/ListMyCommunication'>
                            나의 게시글
                        </Link>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>내 정보</Menu.Header>

                    <Menu.Menu>
                        <Link to='/mypage/ChangeMyInfo'>
                            개인 정보 수정
                        </Link>
                        <br/><br/>
                        <Link to='/mypage/ChangeMyProfile'>
                            프로필 수정
                        </Link>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
            <div style={{marginLeft: '100px'}}>
                <Route path='/mypage' component={MyProfile} />
                <Route path='/mypage/ListCourse' component={ListCourse} />
                <Route path='/mypage/ListMemo' component={ListMemo} />
                <Route path='/mypage/ListMyQnA' component={ListMyQnA} />
                {/* <Route path='/ListWrite' component={ListWrite} /> */}
                {/* <Route path='/ListReceivedQnA' component={ListReceivedQnA} /> */}
                {/* <Route path='/ListCourseReview' component={ListCourseReview} /> */}
                {/* <Route path='/ListMyCommunication' component={ListMyCommunication} /> */}
                {/* <Route path='/ChangeMyInfo' component={ChangeMyInfo} /> */}
                {/* <Route path='/ChangeMyProfile' component={ChangeMyProfile} /> */}
            </div>
        </div>
  );
}

export default MyPageMenuBar;
