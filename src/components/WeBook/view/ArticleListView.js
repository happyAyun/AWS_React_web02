import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ArticleEditor from './ArticleEditor';

function ArticleListView(props) {
  const {articles} = props;
  const {article} = props;
  const id = props.id;
  const { onArticleDetail } = props;

  const {viewState} = props;

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get(`http://localhost:8000/api/book/detail/${article.book_id}/`, {
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
                        {post.book_id}
                        {post.book_title}
                    </div>
                    );
                  })
                )
            }
            {/* qna */}
            {
                viewState === 'qna' && (
                    <div>qnaqnaqna</div>
                )
            }
            {/* 메모 */}
            {
                viewState === 'memo' && (
                    <div>
                      <ArticleEditor />
                    </div>
                )
            }
        </div>
  );
}

export default ArticleListView;
