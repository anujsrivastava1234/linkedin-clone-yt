import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar'
import Feed from './Feed'
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.profileUrl,
        })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }

    })
  }, []);
  return (

    <div className="app">
      <Header />
      {/*  App Body*/}
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          {/*  SideBar*/}
          <SideBar />
          {/*  Feed*/}
          <Feed />

          {/*  Widgets */}
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
