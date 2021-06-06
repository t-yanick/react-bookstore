/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import progressCircle from '../assets/progressCircle.png';

const Book = (props) => {
  const { book, remove } = props;
  return (
    <tbody>
      <tr key={book.id}>
        <div className="book">
          <div className="book-info">
            <td className="book-category">{book.category}</td>
            <td className="book-title">{book.title}</td>
            <td className="book-author">Michael Hart</td>
            <ul className="book-actions">
              <li className="book-actions-li"><a>Comments</a></li>
              <li className="book-actions-li"><button type="button" value={book.id} onClick={remove} className="remove-btn">Remove</button></li>
              <li className="book-actions-li"><a>Edit</a></li>
            </ul>
          </div>
          <div className="over-all-progress">
            <div>
              <img alt="progress circle" src={progressCircle} />
            </div>
            <div>
              <p className="progress-number">64%</p>
              <p className="completed-text">Completed</p>
            </div>
          </div>
          <div>
            <p className="chapter-info">CURRENT CHAPTER</p>
            <p className="chapter-number">CHAPTER 17</p>
            <button type="button" className="btn">UPDATE PROGRESS</button>
          </div>
        </div>
      </tr>
    </tbody>
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: '',
};

export default Book;
