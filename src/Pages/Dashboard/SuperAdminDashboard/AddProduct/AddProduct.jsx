import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import img1 from "../../../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png";
import InputField from "../../../../Componants/Share/InputFeild/InputField";
import useTheme from "../../../../Hooks/useTheme";
import { CiTrash } from "react-icons/ci";
import { uploadToCloudinary } from "../../../../Componants/Share/ImageUpload/uploadToCloudinary";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Addmetarial from "./Addmetarial";


export default function AddProduct() {
  const [newFieldKey, setNewFieldKey] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");
  const [newpackageValue, setNewpackagevalue] = useState("");
  const [newpackagekey, setNewpackageKey] = useState("");
  const [newOtherAttributeValue, setNewOtherAttributevalue] = useState("");
  const [newOtherAttributekey, setNewOtherAttributeKey] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [gsm, setGsm] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const axiosSecure = useAxiosSecure()
  const [metarialdata, setFinalMaterials] = useState([])
  // console.log('save metarial',{metarials:metarialdata})

  const { register, control, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm({
    defaultValues: {
      product_id: "",
      name: "",
      gender: "",
      sizes: "",
      MOQ: "",
      Average_Colours: "",
      images: [],
      materials: {},
      industry_specific_attributes: [],
      packaging_and_delivery: {},
      other_attributes: {},
      other_attributes2: {},
    },
  });

  const { fields: imageFields, append: appendImage } = useFieldArray({
    control,
    name: "images",
  });

  const {
    fields: industryFields,
    append: appendIndustryField,
    remove: removeIndustryField,
  } = useFieldArray({
    control,
    name: "industry_specific_attributes",
  });
  const {
    fields: packagingFields,
    append: appendPackageField,
    remove: removepackageField,
  } = useFieldArray({
    control,
    name: "packaging_and_delivery",
  });
  const {
    fields: OtherAttribute,
    append: appendOtherAttributeField,
    remove: removeOtherAttributesField,
  } = useFieldArray({
    control,
    name: "other_attributes",
  });

  const handleAddIndustryField = () => {
    if (!newFieldKey.trim()) return;
    appendIndustryField({ [newFieldKey]: newFieldValue });
    setNewFieldKey("");
    setNewFieldValue("");
  };
  const handleAddpackagingField = () => {
    if (!newpackagekey.trim()) return;
    appendPackageField({ [newpackagekey]: newpackageValue });
    setNewpackageKey("");
    setNewpackagevalue("");
  };
  const handleAddOtherAttributeField = () => {
    if (!newOtherAttributekey.trim()) return;
    appendOtherAttributeField({ [newOtherAttributekey]: newOtherAttributeValue });
    setNewOtherAttributeKey("");
    setNewOtherAttributevalue("");
  };

  const [priceEntries, setPriceEntries] = useState([
    { min: "", max: "", price_per_piece: "" },
  ]);

  const handleAddPriceEntry = () => {
    setPriceEntries([
      ...priceEntries,
      { min: "", max: "", price_per_piece: "" },
    ]);
  };

  const updatePriceEntry = (index, key, value) => {
    const newEntries = [...priceEntries];
    newEntries[index][key] = value;
    setPriceEntries(newEntries);
  };
  const handleAddMaterial = () => {
    if (!materialType || !gsm || priceEntries.length === 0) return;

    const currentMaterials = watch("materials") || {};
    const material = currentMaterials[materialType] || { gsm: {} };
    const gsmList = material.gsm[gsm] || [];

    const newEntries = priceEntries.map((entry) => ({
      min: parseInt(entry.min),
      max: entry.max ? parseInt(entry.max) : null,
      price_per_piece: parseFloat(entry.price_per_piece),
    }));

    const updatedGsmList = [...newEntries];
    const updatedMaterial = {
      ...material,
      gsm: {
        ...material.gsm,
        [gsm]: updatedGsmList,
      },
    };

    const updatedMaterials = {
      ...currentMaterials,
      [materialType]: updatedMaterial,
    };

    setValue("materials", updatedMaterials); // ✅ correct
    setMaterialType("");
    setGsm("");
    setPriceEntries([{ min: "", max: "", price_per_piece: "" }]);


  };
  const handleDeleteMaterial = (materialName) => {
    const currentMaterials = watch("materials") || {};
    const updatedMaterials = { ...currentMaterials };
    delete updatedMaterials[materialName];
    setValue("materials", updatedMaterials);
  };

  const handleDeleteGsm = (materialName, gsm) => {
    const currentMaterials = watch("materials") || {};
    const material = currentMaterials[materialName];

    if (!material) return;

    const updatedGsm = { ...material.gsm };
    delete updatedGsm[gsm];

    const updatedMaterial = {
      ...material,
      gsm: updatedGsm,
    };

    const updatedMaterials = {
      ...currentMaterials,
      [materialName]: updatedMaterial,
    };

    // If that was the last GSM entry, delete the whole material
    if (Object.keys(updatedGsm).length === 0) {
      delete updatedMaterials[materialName];
    }

    setValue("materials", updatedMaterials);
  };


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
    const productData = { ...data, images: imageUrls,metarials:metarialdata }
    axiosSecure.post('/products', productData)
      .then(res => {
        console.log(res)
        if (res.data.insertedId) {
          toast.success(
            "Successfully added the product",
          );
          reset({
            product_id: "",
            name: "",
            gender: "",
            sizes: "",
            MOQ: "",
            Average_Colours: "",
            images: [],
            materials: {},
            industry_specific_attributes: [],
            packaging_and_delivery: {},
            other_attributes: {},
            other_attributes2: {},
          });

          // 🔄 Reset local states
          setImageUrls([]);
          setMaterialType("");
          setGsm("");
          setPriceEntries([{ min: "", max: "", price_per_piece: "" }]);
          setNewFieldKey("");
          setNewFieldValue("");
          setNewpackageKey("");
          setNewpackagevalue("");
          setNewOtherAttributeKey("");
          setNewOtherAttributevalue("");
        }
      })


    console.log('', productData);
  };


  const { color } = useTheme()

  return (
    <div className="py-10">
     <Addmetarial onSave={(data) => setFinalMaterials(data)} />



      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 w-[90%] m-auto">
        <h1 className="text-3xl font-semibold">Add Products</h1>


        <input required {...register("product_id")} placeholder="Product ID" className="border rounded-lg  p-2 w-full" />
        <input required {...register("name")} placeholder="Name" className="border rounded-lg p-2 w-full" />
        <input required {...register("gender")} placeholder="Gender" className="border rounded-lg p-2 w-full" />
        <input required {...register("sizes")} placeholder="Sizes" className="border rounded-lg p-2 w-full" />
        <input required {...register("MOQ")} placeholder="MOQ" className="border rounded-lg p-2 w-full" />
        <input required {...register("Average_Colours")} placeholder="Average Colours" className="border rounded-lg p-2 w-full" />

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



        <h3 className="font-bold text-lg mt-4">Add Material Pricing</h3>
        {/* Display Added Materials */}
        {Object.entries(watch("materials") || {}).map(([materialName, materialData], i) => (
          <div key={i} className="border border-gray-300 p-3 rounded my-2 bg-gray-50">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-lg">{materialName}</h4>
              <button
                type="button"
                onClick={() => handleDeleteMaterial(materialName)}
                className="text-red-600 text-sm hover:underline"
              >
                Delete Material
              </button>
            </div>

            {Object.entries(materialData.gsm).map(([gsm, entries], j) => (
              <div key={j} className="pl-4 mt-2 border-l-2 border-gray-300">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">GSM: {gsm}</p>
                  <button
                    type="button"
                    onClick={() => handleDeleteGsm(materialName, gsm)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Delete GSM
                  </button>
                </div>

                <ul className="ml-2 mt-1 text-sm text-gray-700">
                  {entries.map((entry, k) => (
                    <li key={k}>
                      Min: {entry.min}, Max: {entry.max ?? "∞"}, Price: {entry.price_per_piece}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="bg-gray-100 p-4 rounded space-y-2">
          <input value={materialType} onChange={(e) => setMaterialType(e.target.value)} placeholder="Material Type (e.g. cotton)" className="border rounded-lg p-2 w-full" />
          <input value={gsm} onChange={(e) => setGsm(e.target.value)} placeholder="GSM (e.g. 100)" className="border rounded-lg p-2 w-full" />
          {priceEntries.map((entry, index) => (
            <div key={index} className="flex gap-2">
              <input value={entry.min} onChange={(e) => updatePriceEntry(index, "min", e.target.value)} placeholder="Min Qty" type="number" className="border rounded-lg p-2 w-full" />
              <input value={entry.max} onChange={(e) => updatePriceEntry(index, "max", e.target.value)} placeholder="Max Qty (optional)" type="number" className="border rounded-lg p-2 w-full" />
              <input value={entry.price_per_piece} onChange={(e) => updatePriceEntry(index, "price_per_piece", e.target.value)} placeholder="Price per piece" type="number" className="border rounded-lg p-2 w-full" />
            </div>
          ))}

          <button type="button" onClick={handleAddPriceEntry} className="bg-gray-500 text-white px-4 py-2 rounded">Add Another Price Entry</button><br />
          <button type="button" style={{ backgroundColor: color?.primary, }} onClick={handleAddMaterial} className=" text-white px-4 py-2 rounded">Add Material Entry</button>
        </div>




        <h3 className="font-bold text-lg mt-4">Industry Specific Attributes</h3>
        {industryFields.map((field, index) => (
          <div key={field.id} className="border flex items-center gap-3 border-gray-300 rounded-lg p-2 mb-2">
            {Object.entries(field).map(
              ([key, value]) =>
                key !== "id" && (
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="  px-1 text-2xl rounded-lg">{index + 1}.</span>

                    <p>{key}: {value}</p>
                  </div>

                )
            )}
            <button type="button" onClick={() => removeIndustryField(index)} className="text-red-500 text-xl flex">
              <CiTrash /><span className=" text-base">Delete</span>
            </button>
          </div>
        ))}

        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold mb-2">Add New Field</h4>
          <input
            value={newFieldKey}
            onChange={(e) => setNewFieldKey(e.target.value)}
            placeholder="Attribute Key (e.g., Material)"
            className="border rounded-lg p-2 w-full mb-2"
          />
          <input
            value={newFieldValue}
            onChange={(e) => setNewFieldValue(e.target.value)}
            placeholder="Attribute Value (e.g., 100% Cotton)"
            className="border rounded-lg p-2 w-full mb-2"
          />
          <button type="button" style={{ backgroundColor: color?.primary, }} onClick={handleAddIndustryField} className=" text-white px-4 py-2 rounded">
            Add Field
          </button>
        </div>


        <h3 className="font-bold text-lg mt-4">Packaging and Delivery </h3>
        {packagingFields?.map((field, index) => (
          <div className="flex">
            <div key={field.id} className="border border-gray-300 rounded-lg p-2 flex gap-3  ">
              {Object.entries(field).map(
                ([key, value]) =>
                  key !== "id" && (
                    <div className="flex items-center gap-3 font-semibold">
                      <span className="  px-1 text-2xl rounded-lg">{index + 1}.</span>

                      <p>{key}: {value}</p>
                    </div>

                  )
              )}
              <button type="button" onClick={() => removepackageField(index)} className="text-red-500 text-xl flex">
                <CiTrash /><span className=" text-base">Delete</span>
              </button>
            </div>
          </div>
        ))}

        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold mb-2">Add New Field</h4>
          <input
            value={newpackagekey}
            onChange={(e) => setNewpackageKey(e.target.value)}
            placeholder="Attribute Key (e.g., Material)"
            className="border rounded-lg p-2 w-full mb-2"
          />
          <input
            value={newpackageValue}
            onChange={(e) => setNewpackagevalue(e.target.value)}
            placeholder="Attribute Value (e.g., 100% Cotton)"
            className="border rounded-lg p-2 w-full mb-2"
          />
          <button type="button" style={{ backgroundColor: color?.primary, }} onClick={handleAddpackagingField} className=" text-white px-4 py-2 rounded">
            Add Field
          </button>
        </div>


        <h3 className="font-bold text-lg mt-4">Other Attributes</h3>
        {OtherAttribute?.map((field, index) => (
          <div key={field.id} className="border flex items-center gap-3 border-gray-300 rounded-lg p-2  mb-2">
            {Object.entries(field).map(
              ([key, value]) =>
                key !== "id" && (
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="  px-1 text-2xl rounded-lg">{index + 1}.</span>

                    <p>{key}: {value}</p>
                  </div>

                )
            )}
            <button type="button" onClick={() => removeOtherAttributesField(index)} className="text-red-500 text-xl flex">
              <CiTrash /><span className=" text-base">Delete</span>
            </button>
          </div>
        ))}

        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold mb-2">Add New Field</h4>
          <input
            value={newOtherAttributekey}
            onChange={(e) => setNewOtherAttributeKey(e.target.value)}
            placeholder="Attribute Key (e.g., Material)"
            className="border rounded-lg p-2 w-full mb-2"
          />
          <input
            value={newOtherAttributeValue}
            onChange={(e) => setNewOtherAttributevalue(e.target.value)}
            placeholder="Attribute Value (e.g., 100% Cotton)"
            className="border rounded-lg p-2 w-full mb-2"
          />
          <button type="button" style={{ backgroundColor: color?.primary, }} onClick={handleAddOtherAttributeField} className="text-white px-4 py-2 rounded">
            Add Field
          </button>
        </div>

        <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded mt-6 w-[50%] flex justify-center m-auto">
          Submit Product
        </button>
      </form>
    </div>
  );
}
