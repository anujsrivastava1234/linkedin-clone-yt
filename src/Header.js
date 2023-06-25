import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'
import HeaderOptions from './HeaderOptions'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {

  const dispatch = useDispatch();

  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header '>
      <div className='header__container'>
        <div className='header__left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' />
          <div className='header__search'>
            {/* SearchIcon */}
            <SearchIcon />
            <input placeholder='Search' type='text' />
          </div>
        </div>
        <div className='header__right'>
          <HeaderOptions Icon={HomeIcon} title='Home' />
          <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOptions Icon={CommentIcon} title='Messaging' />
          <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
          <HeaderOptions avatar={AccountCircleIcon} title='me' onClick={logoutofApp} />
        </div>
      </div>
    </div>
  )
}

export default Header