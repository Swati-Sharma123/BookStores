import React from 'react';
import "../Style/BookList.css";
import BookInfo from './BookInfo';
export default function BookList() {
  return (
    <div className='booklist-component'>
      <h1 className='booklist-heading'>All Books</h1>
      <div className='booklist-flex'>
        <BookInfo/>
        <BookInfo/>
        <BookInfo/>
        <BookInfo/>
      </div>
    </div>
  )
}
