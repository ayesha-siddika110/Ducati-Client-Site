import React from 'react';
import useBlogs from '../../../../Hooks/useBlogs';
import { Link } from 'react-router';
import useTheme from '../../../../Hooks/useTheme';
import { FaTrashAlt } from 'react-icons/fa';
import { GrUpdate } from "react-icons/gr";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const AllBlogs = () => {
    const [Blogs, isLoading, refetch] = useBlogs()
    const { color } = useTheme()
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/blogs/${id}`).then(res => {
                    Swal.fire('Blog The Deleted Successfully'
                    );
                    refetch()
                });
            }
        });
    };


    
    return (
        <div className='w-[90%] m-auto'>
            <h1 className="text-3xl font-semibold py-10">All Blogs</h1>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Blogs?.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl shadow-md overflow-hidden flex flex-col"
                    >
                        <img src={item.images[0]} alt={item.title} className="h-48 w-full object-cover" />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                <div
                                    className="text-sm text-gray-600 mb-4"
                                    dangerouslySetInnerHTML={{ __html: item.description.slice(0, 100) }}
                                ></div>
                            </div>
                            <div className='flex items-center gap-4'>

                                <Link to={`/blogDetailsPage/${item?._id}`}><button
                                    style={{ borderColor: color?.primary, color: color?.primary }}
                                    className="mt-auto px-4 py-2 border  font-semibold rounded-md hover:bg-pink-50 w-fit"
                                >
                                    Read more
                                </button></Link>
                                <div>
                                    <FaTrashAlt
                                        className='text-xl text-red-600' onClick={() => handleDelete(item?._id)}></FaTrashAlt>
                                </div>
                                <div>
                                    <GrUpdate
                                        className='text-xl text-blue-600'></GrUpdate>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AllBlogs;