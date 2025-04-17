
import { useForm } from 'react-hook-form';
import message from '../../assets/logos/icons8-message.gif';
import useTheme from '../../Hooks/useTheme';
const ContactPage = () => {
    const { color } = useTheme()

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        console.log(data);

    }

    return (
        <div className='w-[90%] md:py-20 pb-10  m-auto'>


            <div className='md:flex md:h-[700px] shadow-lg'>
                <div className='h-[700px] md:w-[50%]'>
                    <form onSubmit={handleSubmit(onSubmit)} className=' bg-white h-[700px] flex flex-col justify-center px-16 space-y-3 '>
                        <p className='text-4xl text-center text-black font-semibold flex justify-center items-center gap-2'>
                            <span>Get In Touch!</span>
                            <img src={message} alt="" />
                        </p>
                        <div className='form-control'>
                            <p className='text-black'>Name *</p>

                            <input {...register("name", { required: true })} type="text" placeholder="Type your name" className=" py-3 px-4 rounded-lg input-bordered w-full bg-white bg-opacity-40 border border-black" />
                        </div>
                        {errors.name && <span className='text-red-600'>This field is required</span>}

                        <div className='form-control'>
                            <p className='text-black pb-2'>Email *</p>

                            <input type="email" {...register("email", { required: true })} placeholder="Type here" className=" py-3 px-4 rounded-lg input-bordered w-full bg-white bg-opacity-40 border border-black" />
                        </div>
                        {errors.email && <span className='text-red-600'>This field is required</span>}

                        <div className='form-control'>
                            <p className='text-black pb-2'>Description *</p>

                            <textarea type="email" {...register("description", { required: true })} placeholder="Type here" className=" py-3 px-4 min-h-32 rounded-lg input-bordered w-full bg-white bg-opacity-40 border border-black" />
                        </div>
                        {errors.description && <span className='text-red-600'>This field is required</span>}


                        <div>
                            <button style={{ borderColor: color?.primary,  }} className='border  w-full text-center py-3  rounded-lg hover:bg-[#00A651] hover:text-[#ffffff] mt-3 font-semibold'>Send Message</button>

                        </div>


                    </form>
                </div>
                <div className='md:w-[50%] h-[700px]'>

                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52687.557646920475!2d88.60513789331168!3d25.62340279191247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529bc7fc909b%3A0xd8f861ed9baf24de!2sDinajpur!5e0!3m2!1sen!2sbd!4v1739909940531!5m2!1sen!2sbd"

                        width="100%"
                        height="100%"

                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>


                </div>
            </div>



        </div>
    );
};

export default ContactPage;

