import React from 'react';
import './bookmark.css'

const Bookmark = (props) => {
    // console.log(props.singleCart);
    return (
        <div>
            <p>{props.singleCart.about}</p>
        </div>
    );
};

export default Bookmark;