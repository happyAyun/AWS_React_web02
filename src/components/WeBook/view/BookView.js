import React, {Component, useState} from 'react';
import {Button, ButtonBase, Grid, Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SubscribeModal from '../SubscribeModal';

function BookView(props) {
  const {articles} = props;
  const [subModalOn, setSubModalOn] = useState(false);

  const change = (e) =>{
    console.log(e.target.value);
    props.setIndexProp(e.target.value);
    props.onArticleDetail(props.id);
  };

  return (
      <div>
          {
              // axios 데이터 출력
              Array.isArray(articles) && articles.length ? (articles.map(post => {
                return (
                      <div className="container">
                          <Link to={`/Articless/${post.article_id}`} style={{textDecoration: 'none'}}>
                          <button variant="contained" color="primary"
                                  style={{height: '140px', marginTop: '40px', backgroundColor: '#BF8450'}}
                                  value={post.article_id}
                                  onClick={change}
                                  >
                              글보기
                          </button>
                          </Link>
                          <div className='root'>
                                  <Paper className='papers'>
                                      <Grid container spacing={5}>
                                          <Grid item>
                                              <ButtonBase className='image'>
                                                  <img className='img' alt={post.article_img} src={post.article_img}/>
                                              </ButtonBase>
                                          </Grid>
                                          <Grid item xs={12} sm container style={{display: 'flex', alignItems: 'center'}}>
                                              <Grid item xs container direction="row" spacing={2}>
                                                  <Grid item style={{margin: '0px 200px 0px 100px'}}>
                                                      <Typography gutterBottom variant="subtitle1" style={{fontSize: '20px'}}>
                                                          {post.article_title}
                                                      </Typography>
                                                      <Typography variant="body2" gutterBottom style={{fontSize: '15  px'}}>
                                                          {post.article_views}
                                                      </Typography>
                                                      <Typography variant="body2" color="textSecondary">
                                                          {post.article_date}
                                                      </Typography>
                                                  </Grid>
                                                  <Grid item style={{marginRight: '100px'}}>
                                                      <div style={{cursor: 'pointer'}}>
                                                          {post.article_content}
                                                      </div>
                                                  </Grid>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                  </Paper>
                          </div>
                      </div>
                );
              })) : (
                  <div>로그인필요</div>
              )
          }
          <div>
              <SubscribeModal
                  show={subModalOn}
                  onHide={() => setSubModalOn(false)}
              />
          </div>
      </div>
  );
}

export default BookView;
