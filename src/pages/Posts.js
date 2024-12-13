import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/postsData';

const Posts = () => {
  const [likes, setLikes] = useState(postsData.map(() => false));

  const toggleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? !like : like))
    );
  };

  return (
    <div className="postsContainer">
      <h2 className="tableTitle">게시판</h2>
      <table className="customTable">
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>좋아요</th>
            <th>더 보기</th>
          </tr>
        </thead>
        <tbody>
          {postsData.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/posts/${post.id}`} className="postTitle">
                  {post.title}
                </Link>
              </td>
              <td>
                <button
                  className={`likeBtn ${likes[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                >
                  {likes[index] ? '💖' : '🤍'}
                </button>
              </td>
              <td>
                <Link to={`/posts/${post.id}`} className="moreLink">
                  상세보기
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
