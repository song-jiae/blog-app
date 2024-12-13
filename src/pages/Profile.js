import React from 'react'

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileCard">
        {/* 프로필 사진 및 기본 정보 */}
        <div className="profileHeader">
          <div className="profilePic">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
              alt="둘리"
            />
          </div>
          <div className="profileInfo">
            <h2 className="profileName">프로필 편집</h2>
            <p className="profileUsername">@dooly_the_dinosaur</p>
            <p className="profileEmail">dooly@comicworld.com</p>
          </div>
        </div>

        <div className="profileDetails">
          <h3>자기소개</h3>
          <p>
            안녕하세요! 저는 1억 년 전 빙하에 갇혀있다 깨어난 둘리입니다. 
            친구들과 함께 다양한 모험을 떠나는 것을 좋아해요. 같이 놀아요! 🦖
          </p>
        </div>

        <div className="profileActions">
          <button className="editProfileBtn">둘리 소개 편집</button>
          <button className="logoutBtn">로그아웃</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
