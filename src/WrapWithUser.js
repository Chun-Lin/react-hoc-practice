import React from 'react';

const WrapWithUser = (Component) => {
  const secretUserInfo = {
    name: 'ChunLin',
    favouriteColour: 'blue'
  };

  return (props) => <Component user={secretUserInfo} {...props} />
  
}

export default WrapWithUser