import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

import styles from "./PostItem.module.css";

const PostItem = (props) => {
  const navigate = useNavigate();

  const openPost = (post) => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>

      <div className={styles.postBtns}>
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
