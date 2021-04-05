import React from 'react';
import SimplePaper from './SimplePaper';
import {Link, Route} from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (

      <div>
          <div>
          <Link to="/main">홈</Link>
          {/* <link to="/">우리들의 도서관</link> */}
          {/* <link to="/">책 알아보기</link> */}
          {/* <link to="/"> 커뮤니케이션</link> */}
          {/* <link to="/">도서찾기</link> */}
          </div>
          <Route path="/" component={main} exact />
          <Route path="/Login" component={Login} />
      </div>
  );
};

export default Home;
