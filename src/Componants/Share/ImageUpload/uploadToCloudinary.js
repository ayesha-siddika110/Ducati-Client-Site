// utils/uploadToCloudinary.js

import { toast } from "react-toastify";

export const uploadToCloudinary = async (file) => {
    const CLOUD_NAME = import.meta.env.VITE_cloud_name; // ⬅️ Replace
    const UPLOAD_PRESET = import.meta.env.VITE_Preset; // ⬅️ Replace
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dvribl8s2/image/upload`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      } else {
        return toast.error('Image upload failed, please try again');
      }
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw error;
    }
  };
  