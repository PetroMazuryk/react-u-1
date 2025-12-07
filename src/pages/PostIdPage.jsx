import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";

const PostIdPage = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  const [fetching, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

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
