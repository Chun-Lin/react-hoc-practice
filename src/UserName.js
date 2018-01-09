import React from 'react';

const UserName = (props) => {
  if (props.user) {
    return <p>Logged in as {props.user.name}</p>;
  } else {
    return <p>You need to login</p>;
  }
};

export default UserName