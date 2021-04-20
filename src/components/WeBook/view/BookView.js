import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import {Link} from 'react-router-dom';
import React, {Component, useState} from 'react';

function BookView(props) {
  const {communities} = props;
  return (
        <div>
            <CommonTable headersName={['글번호', '제목', '등록일']}>
                {console.log(props)}
                {
                    // eslint-disable-next-line max-len
                    Array.isArray(communities) && communities.length ? (communities.map(community => {
                      return (
                            <CommonTableRow key={community.article_id}>
                                {/* eslint-disable-next-line max-len */}
                                <CommonTableColumn>{ community.article_id }</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to={`/ViewCommunication/${community.article_id}`}>{ community.article_title }</Link>
                                </CommonTableColumn>
                                {/* eslint-disable-next-line max-len */}
                            </CommonTableRow>
                      );
                    })) : (
                        <CommonTableRow>
                            <CommonTableColumn>Empty</CommonTableColumn>
                        </CommonTableRow>
                    )
                }
            </CommonTable>
        </div>
  );
}

export default BookView;
