import React from 'react';
import {Link, Route} from 'react-router-dom';
import Main from './Main';
import Search from './Search';
import Books from './WeBook/Books';
import ListCommunication from './Communication/ListCommunication';

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
          <Route path="/Books" component={Books} />
          <Route path="/ListCommunication" component={ListCommunication} />
          <Route path="/search" component={Search} />
      </div>
  );
};

export default Home;
