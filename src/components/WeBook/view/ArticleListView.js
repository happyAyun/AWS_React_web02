import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MemoEditor from './MemoEditor';
import ArticleQna from './ArticleQna';
import MemosContainer from '../container/MemosContainer';
import './ArticleListView.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ArticleListView(props) {
  const {articles} = props;
  const {article} = props;
  const id = props.id;
  const { onArticleDetail } = props;
  const classes = useStyles();

  const {viewState} = props;

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get(`http://localhost:8000/api/book/article/${article.bookId}/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);

  return (
      <div className='listMainBox'>
        <div className='listBox'>
          <ul>
            {/* book_id별 목차 출력 */}
            {
                viewState === 'menu' && (
                  dataList.map((post) => {
                    return (
                      <li onClick={(e)=>{
                        onArticleDetail(post.articleId); 
                      }
                      }><span>{post.articleTitle}</span></li>
                    );
                  })
                )
            }
            {/* /!* qna *!/ */}
            {/* { */}
            {/*    viewState === 'qna' && ( */}
            {/*        <div> */}
            {/*          <ArticleQna */}
            {/*            bookId={article.bookId} */}
            {/*          /> */}
            {/*        </div> */}
            {/*    ) */}
            {/* } */}
            {/* 메모 */}
            {
                viewState === 'memo' && (
                    <>
                    <div>
                      <MemosContainer bookId={article.bookId} />
                    </div>
                    </>
                )
            }
          </ul>
        </div>
      </div>
  );
}

export default ArticleListView;
