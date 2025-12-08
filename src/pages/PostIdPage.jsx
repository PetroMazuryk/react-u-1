import {useEffect, useState, useCallback} from "react";
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";

const PostIdPage = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  const fetchPostById = useCallback(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  }, []);

  const [fetching, isLoading, error] = useFetching(fetchPostById);

  useEffect(() => {
    fetching(id);
  }, [id, fetching]);

  if (isLoading) return <div>Завантаження...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
};

export default PostIdPage;
