import React from 'react';
import WrapWithUser from './WrapWithUser'
import UserName from './UserName'
import UserColor from './UserColor'

const ConnectUserName = WrapWithUser(UserName)
const ConnectUserColor = WrapWithUser(UserColor)

export { ConnectUserColor, ConnectUserName }
