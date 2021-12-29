import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

export const Authenticated = ({ children }) => {
    const auth = useRecoilValue(authenticated);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(!auth.check) navigate('/login');
    }, [auth.check, navigate])
    
    return children
}