import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useTheme from '../../Hooks/useTheme';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const RegisterPage = () => {
    const {color} = useTheme()
    const {signUpWithEmail,updateProfileData} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        signUpWithEmail(data?.email, data?.password)
        .then(response => {
            console.log(response)

            const updateDatas = {
                displayName: data?.name,

            }
            updateProfileData(updateDatas)
                .then(response => {
                    console.log(response);
                    const userData = {
                        userName: data?.name,
                        email: data?.email,
                        role: "customer"
                    }
                    console.log(userData);

                    axiosPublic.post(`/users/${data?.email}`, userData)
                        .then(res => {
                            if (res.data.insertedId) {
                                toast.success('Successfully Register & save to database')
                            }

                        })
                        // navigate(from, { replace: true });

                })
                .catch(err => {
                    // console.log(err);

                })
        })
        .catch(err => {
            if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                toast.error("email-already-in-use , Please Login");
                navigate('/login')
            } else {
                toast.error(err.message)
            }

        })


    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-white bg-opacity-30  w-[100%] md:w-[50%] lg:w-[38%] m-auto py-20 space-y-5'>
                    <p className='text-4xl text-center   font-semibold'>Register Now!</p>
                   
                    
                   
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
                        <button style={{backgroundColor: `${color.primary}`}} className=' w-full text-center py-3 text-white rounded-xl   mt-3'>Register</button>

                    </div>
                    {/* <SocialLogin></SocialLogin> */}
                    <Link to="/login" className='hover:underline text-black flex'>Already have an account ? please  <p style={{color: `${color.primary}`}} className='pl-2 font-semibold'> Login</p></Link>
                </form>
        </div>
    );
};

export default RegisterPage;