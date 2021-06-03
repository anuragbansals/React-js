import React from "react";

const Post = ({ title, text }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Post;
