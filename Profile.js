
import React from 'react';

function Profile() {

  const userDetails = { name: 'shashank', email: 'shashank@gmail.com', gender: 'Male' };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Gender: {userDetails.gender}</p>
    </div>
  );
}

export default Profile;
