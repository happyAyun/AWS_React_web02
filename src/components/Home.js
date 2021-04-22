import React from 'react';
import {Link, Route} from 'react-router-dom';
import Main from './Main';
import Search from './Search';
import ListCommunication from './Communication/container/ListCommunication';
import MyPage from './MyPage/MyPage';
import ViewCommunication from './Communication/ViewCommunication';
import CommunityPage from './Communication/view/CommunityPage';
import BookContainer from './WeBook/view/MainBook';
import List from './WeBook/container/BookContainer';
import Articless from './WeBook/container/ArticleDetail';
import BookCreate from './WeBook/BookCreate';
import ArticleCreate from './WeBook/ArticleCreate';

const Home = () => {
  return (
      <div className="main-bar">
          <div className="menu-Bar">
          <Link to="/">홈</Link>
           <Link to="/Books">우리들의 도서관</Link>
              <Link to="/community">커뮤니케이션</Link>
            <Link to="/search">도서찾기</Link>

          </div>
          <Route path="/" component={Main} exact />
          <Route path="/Books/api/" component={BookContainer} />
          <Route path="/ListCommunication" component={ListCommunication} />
          <Route path="/Books" component={BookContainer} />
          <Route path="/community" component={CommunityPage}/>

          <Route path="/BookCreate" component={BookCreate}/>
          <Route path={'/ArticleCreate/:book_title'} component={ArticleCreate}/>

          {/* <Route path="/ListCommunication" component={ListCommunication} /> */}
          <Route path="/search" component={Search} />
          <Route path="/mypage" component={MyPage}/>
          <Route exact path='/ViewCommunication/:no' component={ViewCommunication} />
          {/* <Route path={'/Article/:id'} component={Article}/> */}
          <Route path={'/List'} component={List}/>
          <Route path={'/Articless/:id'} component={Articless}/>

      </div>
  );
};

export default Home;
