import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MainBook.css';

function MainBook(props) {
  const [dataList, setDataList] = useState([]);
  const data = {};

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://localhost:8000/api/book/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);

  // eslint-disable-next-line array-callback-return
  const doc = dataList.map((post) => {
    return (
        <div className='subBox'>
            <Link to={{
              pathname: '/List/',
              state: {
                bookId: post.bookId
              }
            }}>

            {post.bookId}
              <button value={post.bookId} onClick={(e)=>{
                console.log(e.target.value);
                axios.post('http://localhost:8000/api/memo/create/', {
                  data: {
                    bookId: post.bookId
                  }
                }, {
                  headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                  }
                }
                );
              }}>책 목록 보기</button>

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                      component="img"
                      height="140"
                      image="{dataList.bookImg}"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.bookId} &nbsp; {post.bookTitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" value={post.bookId} onClick={(e)=>{
                    console.log(e.target.value);
                    axios.post('http://localhost:8000/api/memo/create/', {
                      data: {
                        bookId: post.bookId
                      }
                    }, {
                      headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                      }
                    });
                    console.log(post.bookId);
                  }}>책 목록 보기</Button>
                </CardActions>
              </Card>
            </Link>
        </div>
    );
  });

  return (
        <div>
          { dataList
            ? (
                <div>
                <div className='MainBox'>
                  {doc}
                </div>
                </div>
            )
            : (
                  <div>
                    none
                  </div>
            )}
        </div>
  );
}

export default MainBook;
