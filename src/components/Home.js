import React from 'react';
import {Link, Route} from 'react-router-dom';
import Main from './Main';
import Search from './Search';
import Books from './WeBook/Books';
import ListCommunication from './Communication/ListCommunication';
import MyPage from './MyPage/MyPage';
import CreateCommunication from './Communication/CreateCommunication';
import ViewCommunication from './Communication/ViewCommunication';
import Article from './WeBook/Article';

const Home = () => {
  return (
      <div className="main-bar">
          <div className="menu-Bar">
          <Link to="/">홈</Link>
           <Link to="/Books">우리들의 도서관</Link>
              <Link to="/ListCommunication">커뮤니케이션</Link>
            <Link to="/search">도서찾기</Link>

          </div>
          <Route path="/" component={Main} exact />
          <Route path="/Books/" component={Books} />
          <Route path="/ListCommunication" component={ListCommunication} />
          <Route path="/search" component={Search} />
          <Route path="/mypage" component={MyPage}/>
          <Route path="/CreateCommunication" component={CreateCommunication}/>
          <Route exact path='/ViewCommunication/:no' component={ViewCommunication} />
          <Route path={'/Article/:id'} component={Article}/>

      </div>
  );
};

export default Home;
