import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import ListCourse from '../MyPage_Route/ListCourse';
import ListMemo from '../MyPage_Route/ListMemo';
import ListMyQnA from '../MyPage_Route/ListMyQnA';
import ListWrite from '../MyPage_Route/ListWrite';
import ListReceivedQnA from '../MyPage_Route/ListReceivedQnA';
import ListCourseReview from '../MyPage_Route/ListCourseReview';
import MyProfile from './MyProfile';
import QnADetail from './QnA/QnADetail';
import MemoList from './Memo/MemoList';
import MemoDetail from './Memo/MemoDetail';
import Review from './MyBook/Review';
import '../../App.css';
function MyPageMenuBar() {
  return (
        <div className="myPageMenu-Bar" style={{display: 'flex'}}>
            <div style={{float: 'left'}}>
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
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
            </div>
            <div style={{marginLeft: '100px'}}>
                <Route path='/mypage' component={MyProfile} exact/>
                <Route path='/mypage/ListCourse' component={ListCourse} />
                <Route path='/mypage/ListMemo' component={ListMemo} />
                <Route path='/mypage/ListMyQnA' component={ListMyQnA} />
                <Route path='/mypage/ListWrite' component={ListWrite} />
                 <Route path='/mypage/ListReceivedQnA' component={ListReceivedQnA} />
                 <Route path='/mypage/ListCourseReview' component={ListCourseReview} />
                {/* <Route path='/ListMyCommunication' component={ListMyCommunication} /> */}
                {/* <Route path='/ChangeMyInfo' component={ChangeMyInfo} /> */}
                {/* <Route path='/ChangeMyProfile' component={ChangeMyProfile} /> */}
                <Route path='/mypage/QnADetail' component={QnADetail}/>
                <Route path='/mypage/MemoList' component={MemoList}/>
                <Route path='/mypage/MemoDetail' component={MemoDetail}/>
                <Route path='/mypage/Review' component={Review}/>
            </div>
        </div>
  );
}

export default MyPageMenuBar;
