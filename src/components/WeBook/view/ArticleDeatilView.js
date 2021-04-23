import React, {useEffect} from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

function ArticleDeatilView(props) {
  const {articles} = props;
  const {article} = props;

  const id = props.id;
  const { onArticleDetail } = props;

  return (
      <Table celled>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>title : {article.articleTitle}</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
                          <Table.Row>
                              <Table.Cell>
                                  content : {article.articleContent}
                              </Table.Cell>
                          </Table.Row>
              <Table.Row>
                  <Table.Cell>
                      date : {article.articleDate}
                  </Table.Cell>
              </Table.Row>
                  <Table.Row>
                      <Table.Cell>img : {article.articleImg}</Table.Cell>
                  </Table.Row>
          </Table.Body>
      </Table>

  );
}

export default ArticleDeatilView;
