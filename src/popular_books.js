import React, { Fragment, Component } from 'react';
import { books } from './books';

class PopularBooks extends Component {
    book;
    constructor() {
        super();
        this.books = [
           books[1],
           books[6],
           books[7],
        ];
    }

    render() {
        const allBooks = this.books.map((book) => {
            return(
                <Fragment>
                    <div className='col-sm-6 col-lg-4 mb-4 book'>
                        <div className='card text-center book-content'>
                            <div className='card-body'>
                                <h5 className='card-title title'>
                                    {book.title}
                                </h5>
                                <p className='card-text author'>
                                    {book.author}
                                </p>
                                <p className='card-text text-muted publisher'>
                                    {book.publisher}&nbsp;
                                    <small className='year'>
                                        {book.year}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        });

        return(
            <Fragment>
                {allBooks}
            </Fragment>
        );
    }
} 

export default PopularBooks;