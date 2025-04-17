import React, { useState } from 'react';
import { uploadToCloudinary } from './uploadToCloudinary';

const ImageUploader = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);

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
      alert('Upload failed');
    }
    setUploading(false);
  };

  const handleDelete = (urlToDelete) => {
    setImageUrls((prev) => prev.filter((url) => url !== urlToDelete));
  };

  return (
    <div className="p-4 max-w-md mx-auto border-2 border-dashed border-gray-400 rounded shadow space-y-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-center">Upload Images</h2>

      {/* Styled file input */}
      <label htmlFor="image-upload" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
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
            <p>{url}</p>
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
  );
};

export default ImageUploader;
