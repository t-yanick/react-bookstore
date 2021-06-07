/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BookForm = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBook({
      // eslint-disable-next-line
      id: Math.floor(Math.random() * 100),
      title,
      category,
    }));
    setTitle({ value: '' });
    setCategory({ value: '' });
  };
  return (
    <div className="book-form flex space-around">
      <h3 className="title">ADD A NEW BOOK</h3>
      <form className="flex" onSubmit={submitHandler}>
        <input type="text" required onChange={titleHandler} value={title.value} className="add-book" />
        <select required onChange={categoryHandler} value={category.value} className="category-select">
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category}>
              {' '}
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="btn"> Submit</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BookForm.defaultProps = {
  categories: [],
};

export default BookForm;
