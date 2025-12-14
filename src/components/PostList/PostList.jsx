import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useRef} from "react";
import styles from "./PostList.module.css";

const PostList = ({posts, title, remove}) => {
  const refs = useRef(new Map());

  if (!posts.length) {
    return <h1 style={{textAlign: "center"}}>Пости не знайдені</h1>;
  }

  return (
    <div className={styles.postList}>
      <h1 style={{textAlign: "center"}}>{title}</h1>

      <TransitionGroup className={styles.postsWrapper}>
        {posts.map((post, index) => {
          if (!refs.current.has(post.id)) {
            refs.current.set(post.id, {current: null});
          }

          const nodeRef = refs.current.get(post.id);

          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              nodeRef={nodeRef}
              classNames={{
                enter: styles.postEnter,
                enterActive: styles.postEnterActive,
                exit: styles.postExit,
                exitActive: styles.postExitActive,
              }}
            >
              <PostItem
                ref={(el) => (nodeRef.current = el)}
                remove={remove}
                number={index + 1}
                post={post}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
