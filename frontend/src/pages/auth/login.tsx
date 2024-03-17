// src/components/LoginForm.tsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import eyeOpen from '../../assets/svg/eye-open.svg';
import eyeCLosed from '../../assets/svg/eye-closed.svg';

// Define Zod schema
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

// Define interface for form data
interface FormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log('Form data:', data);
    };

    const [viewPassword, setViewPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 
    bg-slate-50
    dark:bg-dark">
            <div className="max-w-[528px] w-full space-y-8">
                <div>
                    <h2 className="text-lg font-semibold text-center text-light-primary dark:text-dark-primary md:text-xl lg:text-2xl">Sign in to WanderLust</h2>

                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        id="email-address"
                        {...register('email')}
                        type="text"
                        autoComplete="email"
                        className="w-full rounded-lg bg-slate-200 p-3 placeholder:text-sm placeholder:text-light-tertiary dark:bg-dark-card dark:text-slate-50 dark:placeholder:text-dark-tertiary"
                        placeholder="Email address"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <div className='relative'>
                        <input
                            id="password"
                            {...register('password')}
                            type={viewPassword ? "text" : "password"}
                            autoComplete="current-password"
                            className="w-full rounded-lg bg-slate-200 p-3 placeholder:text-sm placeholder:text-light-tertiary dark:bg-dark-card dark:text-slate-50 dark:placeholder:text-dark-tertiary"
                            placeholder="Password"
                        />
                        <span className=' dark:text-slate-50 text-black'><button onClick={() => setViewPassword(!viewPassword)} className="absolute top-[11px] right-2 cursor-pointer ">
                            <img src={viewPassword ? eyeOpen : eyeCLosed} alt="Eye Open" className='w-6 h-6 dark:text-slate-50 text-black fill-black dark:fill-slate-50' />
                        </button></span>
                    </div>

                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-lg bg-light-primary px-12 py-3 text-base font-semibold text-light hover:bg-light-primary/80 dark:bg-dark-primary dark:text-dark-card dark:hover:bg-dark-secondary/80 md:mx-1 "

                        >
                            Log In
                        </button>
                    


                    </div>
                    <p className=' text-light-primary dark:text-dark-primary te'>
                            Don’t have an account?
                            <span className='text-blue-500'>
                                {" "}
                                <Link to="/register">Sign up now</Link>
                            </span>

                        </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
