import React from 'react';
import MyButton from './UI/button/MyButton';
// import { useHistory } from 'react-router-dom';

const PostItem = props => {
  //   console.log(props);
  // const router = useHistory();
  // console.log(router);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
          {/* {props.post.id}. {props.post.title} */}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => props.remove(props.post)}>Відкрити</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
