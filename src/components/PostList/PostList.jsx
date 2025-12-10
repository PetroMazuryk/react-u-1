import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import styles from "./PostList.module.css";

const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return <h1 style={{textAlign: "center"}}>Пости не знайдені</h1>;
  }
  return (
    <div className={styles.postList}>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <TransitionGroup className={styles.postsWrapper}>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
