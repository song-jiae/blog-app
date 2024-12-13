import React, { useState } from "react";

const CommentSection = () => {
  /* useState
    댓글 배열
    새 댓글 텍스트
    댓글 보이기/숨기기
    수정 댓글 인덱스
    수정된 댓글 텍스트
  */
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  /* 
  함수
  댓글추가, 보이기숨기기, 댓글수정, 수정된 댓글 저장, 삭제
   */
  /* handle관련된내용 */
  const handleAddComment = () => {
    //댓글 추가
    if (newComment.trim()) {
      //만약에 내용이 비어있지 않으면
      setComments([...comments, { text: newComment, id: Date.now() }]); //댓글추가
      setNewComment(""); //새댓글 텍스트 초기화
    }
  };
  const toggleComments = () => {
    //댓글 보이기 / 숨기기
    setShowComments(!showComments);
  };
  const handleEditComment = (index) => {
    //댓글 수정
    setEditIndex(index); //수정할 댓글 인덱스를 저장
    setEditText(comments[index].text);
  };
  const handleSaveEdit = () => {
    //수정된 댓글 저장
    if (editText.trim()) {
      //텍스트가 비어있지 않으면
      const updatedComments = [...comments]; //댓글 배열복사
      updatedComments[editIndex].text = editText; //수정반영
      setComments((prevComments)=>{
        const updatedComments = [...prevComments];
        updatedComments[editIndex].text = editText;
        return updatedComments
      });
      setEditIndex(null);
      setEditText("");
    }
  };
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };
  return (
    <div className="commentWrap">
      <button onClick={toggleComments} className="commentToggleBtn">
        {showComments ? "댓글 숨기기" : "댓글 보기"}
      </button>
      {showComments && (
        <div>
          <ul className="commentList">
            {comments.map(
              (
                comment,
                index //댓글목록 출력
              ) => (
                <li key={comment.id}>
                  <div className="commentContent">
                    {editIndex === index ? ( //수정중인댓글 입력필드로 보여줌
                      <div>
                        <input type="text" 
                          value={editText}
                          onChange={(e)=>setEditText(e.target.value)}//수정된 텍스트 상태업데이트
                        />
                        <button
                          onClick={handleSaveEdit}
                          className="commentAddBtn"
                        >
                          저장
                        </button>
                      </div>
                    ) : (
                      <p>{comment.text}</p>
                    )}
                  </div>
                  <div>
                    <span
                      className="editBtn"
                      onClick={() => handleEditComment(index)}
                    >
                      수정
                    </span>
                    <span
                      className="deleteBtn"
                      onClick={() => handleDeleteComment(index)}
                    >
                      삭제
                    </span>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className="reple">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력 하세요..."
            />

            <button className="commentAddBtn" onClick={handleAddComment}>
              댓글추가
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
