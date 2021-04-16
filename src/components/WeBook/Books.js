import React, {useEffect, useState} from 'react';
import {Grid, ButtonBase, Typography, Paper, Button} from '@material-ui/core';
import './Books.css';
import {Link, Route} from 'react-router-dom';
import SubscribeModal from './SubscribeModal';

// 임시 데이터자료

const postList = [
  {
    no: 1,
    title: '첫번째 게시글입니다.',
    writer: 'kim',
    content: '첫번째 게시글 내용입니다.',
    publisher: 'a'
  },
  {
    no: 2,
    title: '두번째 게시글입니다.',
    writer: 'kim',
    content: '두번째 게시글 내용입니다.',
    publisher: 'a'
  },
  {
    no: 3,
    title: '세번째 게시글입니다.',
    writer: 'kim',
    content: '세번째 게시글 내용입니다.',
    publisher: 'a'
  },
  {
    no: 4,
    title: '네번째 게시글입니다.',
    writer: 'kim',
    content: '네번째 게시글 내용입니다.',
    publisher: 'a'
  },
  {
    no: 5,
    title: '다섯번째 게시글입니다.',
    writer: 'kim',
    content: '다섯번째 게시글 내용입니다.',
    publisher: 'a'
  },
];

function Books(props) {
  const [subModalOn, setSubModalOn] = useState(false);
  // 데이터 id 값 state
  const [indexId, setIndexId] = useState(0);

  const renderBooks = postList.map((post) => {
    // 임시 state
    return (
            <div className="container">
                <Button variant="contained" color="primary"
                        style={{height: '140px', marginTop: '40px', backgroundColor: '#BF8450'}}
                        onClick={() => setSubModalOn(true)}>
                    수강신청
                </Button>
                <div className='root'>
                    <Link to={'/Article'} style={{textDecoration: 'none'}}>
                        <Paper className='papers'>
                            <Grid container spacing={5}>
                                <Grid item>
                                    <ButtonBase className='image'>
                                        <img className='img' alt="책 이미지" src="/static/images/grid/complex.jpg"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container style={{display: 'flex', alignItems: 'center'}}>
                                    <Grid item xs container direction="row" spacing={2}>
                                        <Grid item style={{margin: '0px 200px 0px 100px'}}>
                                            <Typography gutterBottom variant="subtitle1" style={{fontSize: '20px'}}>
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom style={{fontSize: '15  px'}}>
                                                {post.writer}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {post.publisher}
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{marginRight: '100px'}}>
                                            <div style={{cursor: 'pointer'}}>
                                                {post.content}
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Link>
                </div>
            </div>
    );
  });
  return (
        <div>
            <SubscribeModal
                show={subModalOn}
                onHide={() => setSubModalOn(false)}
            />
            {renderBooks}
        </div>
  );
}

export default Books;
