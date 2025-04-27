import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from 'API/PostService';

const PostIdPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getById(id);
        setPost(response.data);
      } catch (e) {
        setError('Не вдалося завантажити пост');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default PostIdPage;
