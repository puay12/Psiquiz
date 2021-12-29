import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Button } from '../button/Button';
import '/public/css/register.css';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const wave_signup = '/img/wave_signup.png';
    const navigate = useNavigate();
    const [form, setForm] = React.useState({full_name: '', email: '', password: ''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submit = e => {
        e.preventDefault();
        Accounts.createUser(
            {
                email: form.email,
                password: form.password,
                profile: {
                    full_name: form.full_name,
                },
            }, 
            (error) => {
                if(error) console.log(error);
                else {
                    navigate('/login', {replace:true});
                }
            }
        );
    };

    return(
        <div className='signup'>
            <img src={wave_signup} alt="wave_signup" className='wave_signup'/>
            <div className="container box">
                <p className='judul'>Buat Akun</p>
                <div className='line'></div>
                <form onSubmit={submit} className='signupForm'>
                    <div>
                        <label htmlFor="full_name" className='text'>Nama</label>
                        <input 
                            type='text' 
                            placeholder='masukkan nama kamu'
                            name='full_name'
                            required
                            onChange={handleChange}
                            className='nama form-control'
                            value={form.full_name}
                        />
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
                    <Button text='Daftar' type='submit'/>
                </form>
            </div>
        </div>
    );
};