import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ArticleCreate from './ArticleCreate';
import axios from 'axios';

function BookCreate(props) {
  const [bookTitle, setBookTitle] = useState('');
  const [BookImg, setBookImg] = useState();
  const [bookMakeList, setBookMakeList] = useState({
    bookTitle: '',
    bookWritter: '',
    bookPublisher: ''});
  const [userId, setUserID] = useState();

  const InsertBook = ()=>{
    axios.post('http://localhost:8000/api/book/create/', {
      data:
        bookMakeList
    }, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }
    }).then((response) => {
      if (response.data != null) {
        // console.log(bookMakeList.book_title);
      }
    });
  };

  return (
        <div>
            <div>
                <div className="box">
                    <img className="profile" src={BookImg} />
                </div>
                <button>이미지 업로드</button></div>

            <form>

                <div className="form-group">
                    <label htmlFor="inputsm" >책 제목:</label>
                    <input className="form-control input-sm" onChange= {e => setBookMakeList({...bookMakeList, bookTitle: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputsm">지은이: </label>
                    <input className="form-control input-sm" onChange={e => setBookMakeList({...bookMakeList, bookWritter: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputsm">출판사: </label>
                    <input className="form-control input-sm" onChange={e => setBookMakeList({...bookMakeList, bookPublisher: e.target.value})}/>
                </div>
                <Link className="header-dashboard" to={{
                  pathname: `/ArticleCreate/${bookMakeList.bookTitle}`,
                  state: {
                    bookTitle: bookMakeList.bookTitle
                  }
                }}
                >
                    <button type="submit" className="btn btn-primary" onClick={InsertBook}>
                        글 작성하기
                    </button>
                </Link>

            </form>

        </div>
  );
}

export default BookCreate;
