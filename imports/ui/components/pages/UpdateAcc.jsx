import React from 'react';
import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';
// import '../../../api/functions';
import { useRecoilState } from 'recoil';
import { authenticated } from '../../store';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import '/imports/api/functions.js';
import '/public/css/register.css';


export const UpdateAcc = () => {
    const wave_signup = '/img/wave_signup.png';
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authenticated);
    const [form, setForm] = React.useState({full_name: auth?.user?.profile?.full_name, email: auth?.user?.emails[0]?.address});
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        Meteor.call('updateGroups', form, (error) => {
            if(error) console.log(error);
            else {
                const User = Meteor.user();
                setAuth({check: true, user: User});
                navigate("/pilih-tes", { replace: true });
            }
        })
    };

    return(
        <div className='signup'>
            <img src={wave_signup} alt="wave_signup" className='wave_signup'/>
            <div className="container box update">
                <p className='judul'>Ubah Akun</p>
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
                    </div>
                    <Button text='Ubah' type='submit'/>
                </form>
            </div>
        </div>
    );
};