import React, { Component } from 'react';
import axios from 'axios';
import Movies from '../components/Movies';
import './Home.css';

class Home extends Component {
    state = {
      isLoading: true,
      documents: [],
    };

    getMovies = async () => {
      const {
        data: { documents },
      } = await axios.get(
        'https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&target=title',
        {
          headers: {
            Authorization: 'KakaoAK b2097d36d494cbe565a431b90c53c9c6',
          },
          params: {
            query: '어린왕자',
          },
        }
      );
      this.setState({ documents, isLoading: false });
    };

    componentDidMount() {
      this.getMovies();
    }

    render() {
      const { isLoading, documents } = this.state;
      return (
            <div>
                <div className="ui form">
                    <label>Enter Search Term</label>
                    <input
                        className="input" />
                </div>
                <section className="container">
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader__text">loading...</span>
                        </div>

                    ) : (

                        <div className="movies">
                            {documents.map((movie) => {
                              // console.log(movie);
                              return (
                                    <Movies
                                        id={movie.isbn}
                                        title={movie.title}
                                        summary={movie.contents}
                                        poster={movie.thumbnail}
                                    />
                              );
                            })}
                        </div>
                    )}
                </section>
            </div>
      );
    }
}

export default Home;
