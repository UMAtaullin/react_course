import React from 'react';
import Book from './Book'
import Preloader from './Preloader'

const BooksApp = (props) => {
  return props.isLoading ? (<Preloader />) : (
    <div>
      <Book name='JS' year='2018' price='500'>
        Text here
      </Book>
      <Book name='TS' year='2019' price='700' />
      <Book name='Python' year='2022' price='400' />
    </div>
  )
}

export default BooksApp;