/* eslint-disable import/extensions */

import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import './App.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <div>
    <BookList categories={categories} />
    <BookForm categories={categories} />
  </div>
);

export default App;
