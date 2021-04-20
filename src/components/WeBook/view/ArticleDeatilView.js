import React, {useEffect} from 'react';
import { Table } from 'semantic-ui-react';

function ArticleDeatilView(props) {
  const {articles} = props;
  const {article} = props;

  const id = props.id;
  const { onArticleDetail } = props;

  useEffect(()=>{
    onArticleDetail(id);
  });

  return (
      <Table celled>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>title : {article.article_title}</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
                          <Table.Row>
                              <Table.Cell>
                                  content : {article.article_content}
                              </Table.Cell>
                          </Table.Row>
              <Table.Row>
                  <Table.Cell>
                      date : {article.article_date}
                  </Table.Cell>
              </Table.Row>
                  <Table.Row>
                      <Table.Cell>img : {article.article_img}</Table.Cell>
                  </Table.Row>
          </Table.Body>
      </Table>

  );
}

export default ArticleDeatilView;
