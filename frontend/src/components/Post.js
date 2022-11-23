import React from 'react';
import { Link } from 'react-router-dom';
const Post = ({ img }) => {
  return (
    <>
      <Link to="/post/:postId">
        <div className="post">
          <img className="postImg" src={img} alt="BannerImage" />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">
                <span className="link">Music</span>
              </span>
              <span className="postCat">
                <span className="link">Life</span>
              </span>
            </div>
            <span className="postTitle">
              <span className="link">Lorem ipsum dolor sit amet</span>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
          </p>
        </div>
      </Link>
    </>
  );
};

export default Post;
