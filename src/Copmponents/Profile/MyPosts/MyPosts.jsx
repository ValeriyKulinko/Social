import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

<<<<<<< HEAD
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

=======
>>>>>>> 262004979f49da77f88d322da6ab5bcb5808f5a1
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
<<<<<<< HEAD
        <div><textarea ref={newPostElement}></textarea></div>
        <div><button onClick={addPost}>Add post</button></div>
=======
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
>>>>>>> 262004979f49da77f88d322da6ab5bcb5808f5a1
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
<<<<<<< HEAD
    </div >
=======
    </div>
>>>>>>> 262004979f49da77f88d322da6ab5bcb5808f5a1
  );
}
export default MyPosts;