import React from 'react';
import {Link, Route} from 'react-router-dom';
import Main from './Main';
import Books from './WeBook/Books';

const Home = () => {
  return (

      <div>

          <div>
          <Link to="/main">홈</Link>
           <Link to="/Books">우리들의 도서관</Link>
           {/* <link to="/"> 커뮤니케이션</link> */}
           {/* <link to="/">도서찾기</link> */}
          </div>
          <Route path="/main" component={Main} exact />
          <Route path="/Books" component={Books} />
      </div>
  );
};

export default Home;
