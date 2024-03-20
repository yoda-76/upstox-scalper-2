import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//http://localhost:8000/profile/login

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        // console.log(form)
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        try {
            const response = await fetch("https://projectsbyyoda.xyz/profile/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/"
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password
                })
            });
            if (!response.ok) {
                throw new Error('Failed to log in');
            }
    
            const data = await response.json();
            console.log("logged in"); 
            console.log(data)
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('data', JSON.stringify(data.data));
            sessionStorage.setItem("email",form.email)
            window.location.href = "/dashboard";


        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    

    return (
        <div className='bg-slate-800 h-screen flex flex-col justify-center items-center text-white'>
            
            <div className='bg-slate-700 h-1/3 w-[25%] flex flex-col justify-between py-5'>
                <h1 className=' text-white text-4xl font-semibold text-center bg-purple-600 p-2'>Login</h1>
                <form className=' flex flex-col gap-1 justify-center items-center' onSubmit={handleSubmit}>
                    <div className=' w-[100%] items-center flex justify-between'>
                        <label htmlFor='email' className='ml-2 text-white text-2xl'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className=' bg-gray-200 text-black px-2 py-1 rounded-md  mr-2 '
                        />
                    </div>
                    <div className='w-[100%] items-center flex justify-between'>
                        <label htmlFor='password'  className=' ml-2 text-white text-2xl'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            className=' bg-gray-200  text-black px-2 py-1 rounded-md mr-2'
                        />
                    </div>
                    <button type="submit" className='w-6/12 bg-purple-600  text-white  hover:shadow-sm hover:shadow-white font-bold py-2 rounded-md mt-2'>
                        Submit
                    </button>
                </form>

            </div>
            <div className='mt-4 flex items-center justify-around gap-3 	'>
                <p className='text-gray-300'>New User?</p>
                    <Link to="/register" className='bg-purple-600  text-white  hover:shadow-sm hover:shadow-white  font-bold  px-4 rounded'>
                        Register
                    </Link>
            </div>
        </div>
    );
}
