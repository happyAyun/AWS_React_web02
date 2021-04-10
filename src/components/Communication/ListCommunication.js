import React, {useState, useEffect} from 'react';
import SearchBar from '../SearchBar.js';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';

const postList = [
  {
    no: 1,
    title: '첫번째 게시글입니다.',
    content: '첫번째 게시글 내용입니다.',
    createDate: '2021-04-09',
    category: 1
  },
  {
    no: 2,
    title: '두번째 게시글입니다.',
    content: '두번째 게시글 내용입니다.',
    createDate: '2021-04-09',
    category: 1
  },
  {
    no: 3,
    title: '세번째 게시글입니다.',
    content: '세번째 게시글 내용입니다.',
    createDate: '2021-04-09',
    category: 2
  },
];

function ListCommunication(props) {
  const [search, setSearch] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
        <div>
            <div className="menu-Bar" color="black">
                <Link to="/"><label>#자유 게시판</label></Link>
                <Link to="/"><label>#중고거래 게시판</label></Link>
                <Link to="/"><label>#멘토링 게시판</label></Link>
                <Link to="/"><label>#스터디 게시판</label></Link>
            </div>
            <Nav>
                <SearchBar value={search} onChange={e => { setSearch(e.target.value); }}/>
                <Link to={'/CreateCommunication'}><button type="button" className="btn btn-primary">생성</button></Link>
            </Nav>

            <CommonTable headersName={['글번호', '제목', '등록일']}>
                {
                    dataList ? dataList.map((item, index) => {
                      return (
                            <CommonTableRow key={index}>
                                <CommonTableColumn>{ item.no }</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to={`/ViewCommunication/${item.no}`}>{ item.title }</Link>
                                </CommonTableColumn>
                                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                            </CommonTableRow>
                      );
                    }) : ''
                }
            </CommonTable>
        </div>
  );
}

export default ListCommunication;
