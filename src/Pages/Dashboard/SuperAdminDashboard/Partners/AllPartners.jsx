import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
// import useCertification from '../../../../Hooks/useCertification';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import usePartners from '../../../../Hooks/usePartners';

const AllPartners = () => {
    const [partners,isLoading,refetch] = usePartners()
    const axiosSecure = useAxiosSecure()
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
                axiosSecure.delete(`/partners/${id}`).then(res => {
                    Swal.fire('This Partner Deleted Successfully'
                    );
                    refetch()
                });
            }
        });
    };
    return (
        <div className='w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>

            {
                partners?.map((item,index)=><div key={index} className='bg-white border border-gray-200 shadow-2xl shadow-green-300 p-4'>
                    <img src={item?.images[0]} alt="Certificate Image" className='h-52 m-auto object-cover' />
                    <div className='flex justify-between items-center py-4'>

                    <p>Title : {item?.title}</p>
                    <FaTrashAlt onClick={()=>handleDelete(item?._id)} className='text-red-500'></FaTrashAlt>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default AllPartners;