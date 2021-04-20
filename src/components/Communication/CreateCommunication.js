import React, {useState} from 'react';

function CreateCommunication(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [check, setCheck] = useState(0);

  const onSubmit = (e)=>{
    console.log(title);
  };
  console.log(check);

  return (
        <form>
            <ul>
                <span className="checkbox">
                <label><input type="radio" name="check" value="check1" onClick={e => { setCheck(1); }}/> 자유 게시판 </label>
            </span>

                <span className="checkbox">
                <label><input type="radio" name="check" value="check2" onClick={e => { setCheck(2); }}/> 중고거래 게시판 </label>
            </span>

                <span className="checkbox disabled">
                <label><input type="radio" name="check" value="check3" onClick={e => { setCheck(3); }}/> 멘토링 게시판 </label>
            </span>

                <span className="checkbox disabled">
                <label><input type="radio" name="check" value="check4" onClick={e => { setCheck(4); }}/> 스터디 게시판 </label>
            </span>
            </ul>

            {/* <div className="form-group"> */}
            {/*    <label htmlFor="inputsm">제목: </label> */}
            {/*    <input className="form-control input-sm" value={title} type="title" onChange={e => { setTitle(e.target.value); }}/> */}
            {/* </div> */}
            <div className="form-group">
                <label htmlFor="comment">내용: </label>
                <textarea className="form-control" rows="5" value={content} onChange={e => { setContent(e.target.value); }}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>등록하기</button>

        </form>
  );
}

export default CreateCommunication;
