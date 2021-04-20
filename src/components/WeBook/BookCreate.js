import React from 'react';

function BookCreate(props) {
  return (
        <div>
            <form>

                <div className="form-group">
                    <label htmlFor="inputsm">제목: </label>
                    <input className="form-control input-sm" value={title} type="title" onChange={}/>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">내용: </label>
                    <textarea className="form-control" rows="5" value={content} onChange={}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={}>등록하기</button>

            </form>

        </div>
  );
}

export default BookCreate;
