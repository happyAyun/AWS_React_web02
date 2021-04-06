import React from 'react';
import {Link, Route} from 'react-router-dom';
import Main from './Main';
import Books from './WeBook/Books';
import ListCommunication from './Communication/ListCommunication';

const Home = () => {
  return (

      <div className="main-bar">
          <div className="menu-Bar">
          <Link to="/main">홈</Link>
           <Link to="/Books">우리들의 도서관</Link>
              <Link to="/ListCommunication">커뮤니케이션</Link>
            <Link to="/">도서찾기</Link>
          </div>
          <Route path="/main" component={Main} exact />
          <Route path="/Books" component={Books} />
          <Route path="/ListCommunication" component={ListCommunication} />
      </div>
  );
};

export default Home;
