import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movies.css';

function Movies({ id, title, summary, poster }) {
  return (

        <div className="movie">
            <Link
                to={{
                  pathname: `/movie/${id}`,
                  state: {
                    title,
                  },
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>

                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
