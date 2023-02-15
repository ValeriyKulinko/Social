import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" />
      {props.message}
      <div>
        <span>like</span>
        {props.likeCount}
      </div>
    </div>
  );
}

export default Post;