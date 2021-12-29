import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { authenticated } from '../../store';
import '/public/css/navbar.css';
import { useState } from 'react/cjs/react.development';

export const ProfileBox = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authenticated);

    const logout = (e) => {
        e.preventDefault();
        Meteor.logout((error) => {
            if(error) console.log(error);
            else{
                setAuth({check: false, user: []});
                navigate('/', {replace: true});
            }
        })
    }

    const deleteAcc = (e) => {
        e.preventDefault();
        Meteor.call('deleteAcc');
        setAuth({check: false, user: []});
        navigate('/', {replace: true});
    }

    return(
        <div className="container boxprofile dropdown-content">
            <p>Hi, {auth?.user?.profile?.full_name}</p>
            <p className='email'>{auth?.user?.emails[0].address}</p>
            <Link to="/update" className='update'>Ubah Akun</Link>
            <Link to='#' onClick={deleteAcc}>Hapus Akun</Link>
            <Link to="#" onClick={logout}>Log Out</Link>
        </div>
    );
};