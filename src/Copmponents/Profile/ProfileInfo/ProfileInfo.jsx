import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div><img src="https://media.istockphoto.com/id/622892200/photo/kiev-city-day-view-panorama-kiev-ukraine.jpg?s=612x612&w=0&k=20&c=Ry3jDVy9jHW7U1BruCDK3XhhBAfpHdPZqtOb9n6XRqI=" />
        <div className={s.descriptionBlock}>ava+description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;