import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MemoEditor from './MemoEditor';
import ArticleQna from './ArticleQna';
import MemosContainer from '../container/MemosContainer';

function ArticleListView(props) {
  const {articles} = props;
  const {article} = props;
  const id = props.id;
  const { onArticleDetail } = props;

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
        <div>
            {/* book_id별 목차 출력 */}
            {
                viewState === 'menu' && (
                  dataList.map((post) => {
                    return (
                    <div>
                        {post.articleId}
                        {post.articleTitle}
                    </div>
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
        </div>
  );
}

export default ArticleListView;
