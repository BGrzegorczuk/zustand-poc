import * as React from 'react';

import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import BasicMenu from "./components/Menu";
import BasicTable from "./components/List";
import {UserProfile} from "./components/UserProfile";
import {useEffect} from "react";
import {useStore} from "./state";

function App() {
  const setUser = useStore(state => state.setUser);
  const setDarkMode = useStore(state => state.setDarkMode);

  useEffect(() => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      friends: [
        {firstName: 'Jane', lastName: 'Doe'},
        {firstName: 'James', lastName: 'Smith'},
      ],
    }

    setTimeout(() => {
      console.log('effect');
      setUser(user);
      // setDarkMode();
    }, 3000);
  }, [setUser, setDarkMode]);

  return (
    <div className="App">
      <UserProfile />
      <BasicMenu />
      <BasicTable />
    </div>
  );
}

export default App;
