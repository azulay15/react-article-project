import React from 'react';
import './Comment.css'

export function Comment(props) {
    return (
        <div className="Comment">
            <h3>Name: {props.author}</h3>
            <p>Publish Date: {props.date}</p>
            <p>{props.content}</p>
        </div>
    );
}
