import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function BookCreate(props) {
  const [BookImg, setBookImg] = useState();
  const [bookMakeList, setBookMakeList] = useState({
    bookTitle: '',
    bookWritter: '',
    bookPublisher: ''});

  const [flag, setFlag] = useState(false);
  const [bookId, setBookId] = useState('');

  const InsertBook = ()=>{
    axios.post('http://localhost:8000/api/book/create/', {
      data:
        bookMakeList
    }, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }
    }).then((response) => {
      setBookId(response.data.bookId);
      setFlag(true);
    }

    );
  };
  // console.log(flag);
  // console.log(bookId);
  return (
        <div>
            <div>
                <div className="box">
                    <img className="profile" src={BookImg} />
                </div>
                <button>이미지 업로드</button></div>

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
                { flag
                  ? <button type="submit" className="btn btn-primary" >
                    <Link
                        className="header-dashboard" to={{

                          pathname: `/ArticleCreate/${bookMakeList.bookTitle}`,
                          state: {
                            bookTitle: bookMakeList.bookTitle,
                            bookId: bookId
                          }
                        }}
                    >넘어가기</Link>
                    </button> : <button type="submit" className="btn btn-primary" onClick={InsertBook}>글작성하기</button>
                }

        </div>
  );
}

export default BookCreate;
