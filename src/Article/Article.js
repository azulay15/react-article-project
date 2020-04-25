import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import './Article.css'


export function Article(props) {
    return (
        <div className="Article">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <img src={props.image} alt="article image" />
            <CommentList />
        </div>
    );
}

