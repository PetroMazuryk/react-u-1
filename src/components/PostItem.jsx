import React from 'react';
const PostItem = props => {
  console.log(props);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}{' '}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <button>Видалити</button>
      </div>
    </div>
  );
};
export default PostItem;
