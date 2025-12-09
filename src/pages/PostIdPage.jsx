import React from "react";
import {useEffect, useState, useCallback} from "react";
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {Loader} from "lucide-react";

const PostIdPage = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchPostById = useCallback(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  }, []);
  const fetchPostByIdComments = useCallback(async (id) => {
    const response = await PostService.getCommentsBypostId(id);
    setComments(response.data);
  }, []);

  const [fetching, isLoading, error] = useFetching(fetchPostById);
  const [fetchComment, isCommentLoading, commentError] = useFetching(
    fetchPostByIdComments,
  );

  useEffect(() => {
    fetching(id);
    fetchComment(id);
  }, [id, fetching, fetchComment]);

  if (isLoading) return <div>Завантаження...</div>;
  if (error) return <div>{error}</div>;
  if (commentError) return <div>{commentError}</div>;

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <h2>Коментарі</h2>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <React.Fragment key={comm.id}>
              <h5>{comm.email}</h5>
              <p>{comm.body}</p>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default PostIdPage;
