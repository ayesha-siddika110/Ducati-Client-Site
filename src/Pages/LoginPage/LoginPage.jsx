import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useTheme from '../../Hooks/useTheme';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const {color} = useTheme()
    const {signInwithEmail}  = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        signInwithEmail(data?.email, data?.password)
        .then(res=>{
            toast.success('Sign In')
            navigate("/")            
        })
        .catch(err=>{
            console.log(err); 
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-white bg-opacity-30  w-[100%] md:w-[50%] lg:w-[38%] m-auto py-20 space-y-5'>
                    <p className='text-4xl text-center   font-semibold'>Login Now!</p>
                    <div className='form-control'>
                        <p className='text-white'>Email *</p>
                        <input {...register("email", { required: true })} type="email" placeholder="Type your valid email" defaultValue={""} style={{border: `1px solid ${color.primary}`}} className=" py-3 px-4 input-bordered w-full rounded-xl   " />
                    </div>
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                    <div className='form-control'>
                        <p className='text-white'>Password *</p>
                            <input {...register("password", { required: true })} type="password" placeholder="Type your password" defaultValue={""} style={{border: `1px solid ${color.primary}`}} className=" py-3 px-4 input-bordered w-full rounded-xl " />
                    </div>
                    {errors.password && <span className='text-red-600'>This field is required</span>}
                    {/* {errors.password && <span className='text-red-600'>{errors.password.message}</span>} */}
                    <div>
                        <button style={{backgroundColor: `${color.primary}`}} className=' w-full text-center py-3 text-white rounded-xl   mt-3'>Login</button>
                    </div>
                    {/* <SocialLogin></SocialLogin> */}
                    <Link to="/register" className='hover:underline text-black flex'>new to our site ? please  <p style={{color: `${color.primary}`}} className='pl-2 font-semibold'> Register</p></Link>
                </form>
        </div>
    );
};

export default LoginPage;