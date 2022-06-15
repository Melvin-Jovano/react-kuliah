import React, { Fragment, Component } from 'react';
import { books } from './books';
import CatalogueItem from './CatalogItem';

class CatalogueExtra extends Component {
    book;
    constructor() {
        super();
        this.books = books;
    }

    render() {
        const allBooks = this.books.map((book, index) => {
            return(
                <Fragment key={index}>
                    <div className='col-sm-6 col-lg-4 mb-4 book'>
                        <CatalogueItem item={book} />
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

export default CatalogueExtra;