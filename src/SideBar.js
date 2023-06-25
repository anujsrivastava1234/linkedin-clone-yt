import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material';
// import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function SideBar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className='sideBar__recentItem'>
            <span className='sideBar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className='sideBar'>
            <div className='sideBar__top'>
                <img src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80' alt='' />
                <Avatar src={user.profileUrl} className='sideBar__avatar' />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sideBar__stats'>
                <div className='sideBar__stat'>
                    <p>Who viewed you</p>
                    <p className='sideBar__statNumber'>2,543</p>
                </div>
                <div className='sideBar__stat'>
                    <p>Views on post</p>
                    <p className='sideBar__statNumber'>2,448</p>
                </div>
            </div>

            <div className='sideBar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default SideBar;