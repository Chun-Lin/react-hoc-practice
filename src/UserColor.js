import React from 'react';

const UserColor = (props) => {
  if (props.user) {
    return <p>My Favorite Color is {props.user.favouriteColour}</p>;
  } else {
    return <p>No favorite Color</p>;
  }
};

export default UserColor