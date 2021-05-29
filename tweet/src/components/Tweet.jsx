import React, { useState } from 'react';

const Tweet = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.tweet.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.tweet.twitterHandle}</h6>
                <p className="card-text">{props.tweet.tweet}</p>
                <a href="" className="card-link">{props.tweet.phoneNumber}</a>
                <a href="" className="card-link">{props.tweet.emailAddress}</a>
                <button onClick={() => props.handleDownVote(props.tweet.id)} className="card-link btn btn-danger">
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button onClick={()=> props.handleUpVote(props.tweet.id)} className="card-link btn btn-primary">
                    <i className="fas fa-arrow-up"></i>
                </button>
                <span className="card-link badge badge-info">{props.tweet.likes}</span>         
            </div>
        </div>
    )
}

export default Tweet;
