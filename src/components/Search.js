import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  const headers = {
    'Content-Type': 'text/plain'
  };
    
  useEffect((url, config) => {
    const search = async () => {
      const data = await axios.get('https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&target=title', {
        headers: {
          Authorization: 'KakaoAK b2097d36d494cbe565a431b90c53c9c6'
        },
        params: {
          query: '어린왕자'
        }
      }).then(response => {
        console.log(response);
      });
      console.log(data);
    };
    search();
  });

  const renderedResults = results.map((result) => {
    return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} >
              </span>
                </div>
            </div>
    );
  });

  return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" />
                </div>
            </div>
            <div className="ui called list">
                {renderedResults}
            </div>
        </div>
  );
};

export default Search;
