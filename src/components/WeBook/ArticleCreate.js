import React, {useEffect, useState} from 'react';
import AriticleCategory from './AriticleCategory';
import Control from './Control';
import ReadContent from './ReadContent';
import CreateArticleContent from './CreateArticleContent';
import axios from 'axios';

function AriticleCreate({location}) {
  const [ArticleTitle, setArticleTitle] = useState('');
  const [mode, setMode] = useState('read');
  const [bookList, setBookList] = useState([]);
  const [articleList, setArticleList] = useState([]);

  // const {bookTitle} = props.location.state;
  console.log(location.state.bookTitle);

  // console.log(mode);
  let title = null;
  let content = null;
  let article = null;

  if (mode === 'read') {
    article = <ReadContent></ReadContent>;
  } else if (mode === 'create') {
    article = <CreateArticleContent onSubmit={function (title, content) {
      console.log(title, content);
      const tmp = {title: title, content: content};
      setArticleList(articleList.concat(tmp));
      console.log('1', articleList);
    }.bind()
    }></CreateArticleContent>;
  }

  // useEffect(() => {
  //   const searchId = ()=>{
  //     axios.post('http://localhost:8000/api/book/detail/', {
  //       data:
  //             location.state.bookTitle
  //     }).then((response) => {
  //       if (response.data != null) {
  //         // console.log(bookMakeList.book_title);
  //       }
  //     });
  //   };
  //   searchId();
  //   console.log(response);
  // }, []);

  return (
        <div>
            <form>

                <div className="form-group">
                    <label htmlFor="inputsm" >책 제목: {location.state.bookTitle}</label>

                </div>

                <AriticleCategory></AriticleCategory>

            </form>
            <Control onChangeMode={function (_mode) {
              setMode(_mode);
            }.bind()}>

            </Control>
            {article}
            <span>
                <button type="button" className="btn btn-primary">완성하기</button>
            </span>
        </div>
  );
}

export default AriticleCreate;
