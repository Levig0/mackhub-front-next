import React from "react";

import Styles from './userProfile.module.css'

const UserProfile = () => {
  return (
    <section className={Styles.userProfile}>
      <img
        className={Styles.avatar}
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Avatar"
      />
      <div className={Styles.userProfileText}>
        <h3>Mark Wanner</h3>
        <p>Cursando S.I</p>
      </div>
    </section>
  );
};

export default UserProfile;
