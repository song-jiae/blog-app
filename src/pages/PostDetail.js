import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection'; 
import postsData from '../data/postsData';

const PostDetail = () => {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return (
      <div className="jouralLayout">게시글을 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="postDetailContainer">
      <div className="postHeader">
        <h1 className="postTitle">{post.title}</h1>
        <div className="postMeta">
          <span className="postAuthor">작성자: {post.author}</span> | 
          <span className="postDate"> {post.date}</span>
        </div>
      </div>
      <div className="postBody">
        <h3>본문</h3>
        <p>{post.body}</p>
      </div>
      <CommentSection />
    </div>
  );
};

export default PostDetail;
