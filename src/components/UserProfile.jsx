import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Button} from "@mui/material";
import {useStore} from "../state";

export const UserProfile = React.memo(() => {
  const user = useStore(state => state.user);
  const darkMode = useStore(state => state.darkMode);
  const logout = useStore(state => state.logout);

  console.log('UserProfile', {user, darkMode});

  return user ? (
    <div>
      <h1>User</h1>
      <Avatar src="https://via.placeholder.com/150" />
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  ) : null;
});