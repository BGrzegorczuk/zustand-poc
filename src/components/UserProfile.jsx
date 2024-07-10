import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {useUserStore} from "../state/user";
import {Button} from "@mui/material";
import {useUIStore} from "../state/ui";
import {useGlobalStore} from "../state";

export const UserProfile = () => {
  const user = useGlobalStore(state => state.user);
  const darkMode = useGlobalStore(state => state.darkMode);
  const logout = useGlobalStore(state => state.logout);

  // const user = useUserStore(state => state.user);
  // const logout = useUserStore(state => state.logout);
  // const darkMode = useUIStore(state => state.darkMode);

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
}