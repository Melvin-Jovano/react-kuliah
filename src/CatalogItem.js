import React, { Fragment, Component } from 'react';
import {FaBookmark, FaThumbsUp} from 'react-icons/fa';
import {FiBookmark, FiThumbsUp} from 'react-icons/fi';

class CatalogueItem extends Component {
    book;
    constructor(props) {
        super(props);
        this.state = {
            ...props.item,
            totalLikes : this.generateNumber(10),
            isLiked : false,
            isBookmarked : this.generateNumber(10) > 5
        };
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    generateNumber(max) {
        return Math.floor(Math.random()*max+1);
    }

    toggleBookmark() {
        return this.setState((state) => {
            return {
                isBookmarked : !state.isBookmarked
            }
        });
    }

    toggleLike() {
        return this.setState((state) => {
            if(state.isLiked) return {
                totalLikes : state.totalLikes - 1,
                isLiked : !state.isLiked
            }
            else return {
                totalLikes : state.totalLikes + 1,
                isLiked : !state.isLiked
            }
        });
    }

    render() {
        return(
            <Fragment>
                <div className='card text-center book-content'>
                    <div className='card-body'>
                        <h5 className='card-title title'>
                            {this.state.title}
                        </h5>
                        <p className='card-text author'>
                            {this.state.author}
                        </p>
                        <p className='card-text text-muted publisher'>
                            {this.state.publisher}&nbsp;
                            <small className='year'>
                                {this.state.year}
                            </small>
                        </p>
                    </div>
                    <div className='card-footer text-muted d-flex'>
                        <p className='flex-grow-1 text-start'>
                            {this.state.isLiked ? <FaThumbsUp onClick={this.toggleLike}/> : <FiThumbsUp onClick={this.toggleLike} />} {this.state.totalLikes} Like(s)
                        </p>
                        <p className='text-end'>
                            {this.state.isBookmarked ? <FaBookmark onClick={this.toggleBookmark} /> : <FiBookmark onClick={this.toggleBookmark} />}
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
} 

export default CatalogueItem;