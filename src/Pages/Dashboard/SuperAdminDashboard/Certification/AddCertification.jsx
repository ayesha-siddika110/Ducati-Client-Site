import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import img1 from "../../../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png";
import InputField from "../../../../Componants/Share/InputFeild/InputField";
import useTheme from "../../../../Hooks/useTheme";
import { CiTrash } from "react-icons/ci";
import { uploadToCloudinary } from "../../../../Componants/Share/ImageUpload/uploadToCloudinary";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';
import useCertification from "../../../../Hooks/useCertification";



export default function AddCertification() {
    const [certification,isLoading,refetch] = useCertification()
 
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { color } = useTheme()
  const [value, setValue] = useState('');
  console.log(value)
  const axiosSecure = useAxiosSecure()
  const { register, control, handleSubmit, watch, formState: { errors }, reset } = useForm({
    defaultValues: {
        title: "",
        images: [],
    },
  });

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    try {
      const uploadedUrls = [];
      for (const file of files) {
        const url = await uploadToCloudinary(file);
        uploadedUrls.push(url);
      }
      setImageUrls((prev) => [...prev, ...uploadedUrls]);
    } catch (err) {
      toast.error('Upload failed. please try again');
    }
    setUploading(false);
  };
  const handleDelete = (urlToDelete) => {
    setImageUrls((prev) => prev.filter((url) => url !== urlToDelete));
  };
  const onSubmit = (data) => {
    const Data = { ...data, images: imageUrls,description: value,time: moment().format('MMMM Do YYYY, h:mm A'), }
    if(imageUrls.length === 0){
      toast.error(
        "Please add A Image",
      );
    }
    else{

      axiosSecure.post('/certification', Data)
        .then(res => {
          console.log(res)
          if (res.data.insertedId) {
            toast.success(
              "Successfully added the certification",
            );
            refetch()
            reset({
              title: "",
              description: "",
              time: "", // "April 20th 2025, 2:00 PM"
              images: [],
  
            });
            // 🔄 Reset local states
            setImageUrls([]);
            setValue("")
           
          }
        })
        
      }
      console.log('', Data);

  };




  return (
    <div className="py-10">


      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 w-[90%] m-auto">
        <h1 className="text-3xl font-semibold">Add Certification</h1>


       
       
        <div className="p-4  mx-auto border-2 border-dashed border-gray-400 rounded shadow space-y-4 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-center">Upload Images</h2>

          {/* Styled file input */}
          <label htmlFor="image-upload" className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer">
            Choose Files
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageChange}
          />

          {uploading && <progress className="progress progress-success w-56 mt-2"></progress>}
          {/* Display uploaded images */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {imageUrls.map((url, idx) => (
              <div key={idx} className="relative border p-2 rounded shadow-sm">
                <img src={url} alt={`Uploaded ${idx}`} className="w-full h-auto rounded" />
                {/* <p>{url}</p> */}
                <button
                  onClick={() => handleDelete(url)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className="font-semibold text-lg py-2">Title : </p>
        <input required {...register("title")} placeholder="Title Here..." className="border rounded-lg  p-2 w-full" />
        {/* <textarea required {...register("description")} placeholder="Product Description ......." className="border rounded-lg  p-2 w-full min-h-40" /> */}
        <div>
         
    </div>
      

        <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded mt-6 w-[50%] flex justify-center m-auto">
          Submit The Certification
        </button>
      </form>
    </div>
  );
}
