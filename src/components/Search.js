import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import Movies from '../components/Movies';
import './Home.css';

const Search = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const take = async () => {
      const { data } = await axios.get(
        'https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&target=title',
        {
          headers: {
            Authorization: 'KakaoAK d810699d948758e4d87e68dd78bb3e90',
          },
          params: {
            query: '어린왕자',
          },
        }
      );
      console.log(data.documents);
      setDocuments(data.documents);
      setIsLoading(false);
    };
    take();
  }, []);

  const renderResults = documents.map((document) => {
    return (
                <div className="movie">
                    <a href={document.url}
                    >
                        <img src={document.thumbnail} alt={document.title} title={document.title} />
                        <div className="movie__data">
                            <h3 className="movie__title">{document.title}</h3>

                            <p className="movie__summary">{document.contents.slice(0, 150)}...</p>
                        </div>
                    </a>
                </div>
    );
  });

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
                            {renderResults}
                        </div>
                    )}
                </section>
            </div>
  );
};

export default Search;
