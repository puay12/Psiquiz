import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button } from '../button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticated } from '../../store';
import '/public/css/login.css';

export const Login = () => {
    const wave_login = '/img/wave_login.png';
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authenticated);
    const [form, setForm] = React.useState({email: '', password: ''});
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        Meteor.loginWithPassword({email: form.email}, form.password, (error) => {
            if(error) console.log(error);
            else {
                const user = Meteor.user();
                setAuth({check: true, user});
                navigate('/pilih-tes', {replace:true});
            }
        });
    }
    return(
        <div className='login'>
            <img src={wave_login} alt="wave_login" className='wave_login'/>
            <div className="container box">
                <p className='judul'>Masuk</p>
                <div className='line'></div>
                <form onSubmit={submit} className='loginForm'>
                    <div>
                        <label htmlFor="email" className='email'>Email</label>
                        <input 
                            type='email' 
                            placeholder='example@gmail.com'
                            name='email'
                            required
                            onChange={handleChange}
                            className='email form-control'
                            value={form.email}
                        />
                        <label htmlFor="password" className='password'>Password</label>
                        <input 
                            type='password' 
                            placeholder='gabungan huruf dan angka'
                            name='password'
                            required
                            onChange={handleChange}
                            className='password form-control'
                            value={form.password}
                        />
                    </div>
                    <Button text='Masuk' type='submit'/>
                </form>
                <p className='daftar'>Belum punya akun? <Link to="/register">Daftar Sekarang</Link></p>
            </div>
        </div>
    );
};