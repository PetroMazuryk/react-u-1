import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  const openPost = (post) => {
    navigate(`/post/${post.id}`);
  };

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
        <MyButton variant="open" onClick={() => openPost(props.post)}>
          Відкрити
        </MyButton>
        <MyButton variant="delete" onClick={() => props.remove(props.post)}>
          Видалити
        </MyButton>
      </div>
    </div>
  );
};
export default PostItem;
