import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import img1 from "../../../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png";
import InputField from "../../../../Componants/Share/InputFeild/InputField";


export default function AddProduct() {
  const { register, control, handleSubmit, setValue, watch , formState: { errors }} = useForm({
    defaultValues: {
      product_id: "TSHIRT001",
      name: "Basic T-Shirt",
      gender: "Girl",
      sizes: "M to 3XL",
      MOQ: "500 pieces",
      Average_Colours: "yes",
      images: [img1, ],
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

  const [newFieldKey, setNewFieldKey] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");
  const [newpackageValue, setNewpackagevalue] = useState("");
  const [newpackagekey, setNewpackageKey] = useState("");
  const [newOtherAttributeValue, setNewOtherAttributevalue] = useState("");
  const [newOtherAttributekey, setNewOtherAttributeKey] = useState("");


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

  const [materialType, setMaterialType] = useState("");
  const [gsm, setGsm] = useState("");
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

    setValue("materials", updatedMaterials);
    setMaterialType("");
    setGsm("");
    setPriceEntries([{ min: "", max: "", price_per_piece: "" }]);
  };

  const onSubmit = (data) => {
    const imagesWithBase64 = data.images.map((img) => {
      if (typeof img === "string" && img.startsWith("data:")) {
        return img;
      }
      return "";
    });
    console.log({ ...data, images: imagesWithBase64 });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        appendImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

const [email ,setEmail] = useState("")
console.log(email)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">

<InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={"" }
        // error={!email.includes("@") && email.length > 0 ? "Invalid email" : ""}
      />
    <input {...register("product_id")} placeholder="Product ID" className="border p-2 w-full" />
    <input {...register("name")} placeholder="Name" className="border p-2 w-full" />
    <input {...register("gender")} placeholder="Gender" className="border p-2 w-full" />
    <input {...register("sizes")} placeholder="Sizes" className="border p-2 w-full" />
    <input {...register("MOQ")} placeholder="MOQ" className="border p-2 w-full" />
    <input {...register("Average_Colours")} placeholder="Average Colours" className="border p-2 w-full" />

    <div>
      <label>Images:</label>
      {imageFields.map((field, index) => (
        <input
          key={field.id}
          {...register(`images.${index}`)}
          placeholder={`Image ${index + 1}`}
          className="border p-2 w-full mt-1"
        />
      ))}
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
    </div>

    <h3 className="font-bold text-lg mt-4">Add Material Pricing</h3>
    <div className="bg-gray-100 p-4 rounded space-y-2">
      <input value={materialType} onChange={(e) => setMaterialType(e.target.value)} placeholder="Material Type (e.g. cotton)" className="border p-2 w-full" />
      <input value={gsm} onChange={(e) => setGsm(e.target.value)} placeholder="GSM (e.g. 100)" className="border p-2 w-full" />
      {priceEntries.map((entry, index) => (
        <div key={index} className="flex gap-2">
          <input value={entry.min} onChange={(e) => updatePriceEntry(index, "min", e.target.value)} placeholder="Min Qty" type="number" className="border p-2 w-full" />
          <input value={entry.max} onChange={(e) => updatePriceEntry(index, "max", e.target.value)} placeholder="Max Qty (optional)" type="number" className="border p-2 w-full" />
          <input value={entry.price_per_piece} onChange={(e) => updatePriceEntry(index, "price_per_piece", e.target.value)} placeholder="Price per piece" type="number" className="border p-2 w-full" />
        </div>
      ))}
      <button type="button" onClick={handleAddPriceEntry} className="bg-gray-500 text-white px-4 py-2 rounded">Add Another Price Entry</button>
      <button type="button" onClick={handleAddMaterial} className="bg-blue-600 text-white px-4 py-2 rounded">Add Material Entry</button>
    </div>

    {/* <div className="mt-4">
      <button type="button" onClick={() => setShowIndustryAttributes(!showIndustryAttributes)} className="font-semibold text-blue-600">
        {showIndustryAttributes ? "Hide" : "Show"} Industry Specific Attributes
      </button>
      {showIndustryAttributes && (
        <div className="mt-2">
          {industryFields.map((field, index) => (
            <div key={field.id} className="border p-2 rounded mb-2">
              {Object.entries(field).map(
                ([key, value]) =>
                  key !== "id" && (
                    <input
                      key={key}
                      {...register(`industry_specific_attributes.${index}.${key}`)}
                      placeholder={key}
                      className="border p-2 w-full mb-1"
                    />
                  )
              )}
              <button type="button" onClick={() => removeIndustryField(index)} className="text-red-500">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div> */}

    {/* <div className="mt-4">
      <button type="button" onClick={() => setShowAddNewField(!showAddNewField)} className="font-semibold text-blue-600">
        {showAddNewField ? "Hide" : "Show"} Add New Field
      </button>
      {showAddNewField && (
        <div className="bg-gray-100 p-4 rounded mt-2">
          <h4 className="font-semibold mb-2">Add New Field</h4>
          <input value={newFieldKey} onChange={(e) => setNewFieldKey(e.target.value)} placeholder="Attribute Key (e.g., Material)" className="border p-2 w-full mb-2" />
          <input value={newFieldValue} onChange={(e) => setNewFieldValue(e.target.value)} placeholder="Attribute Value (e.g., 100% Cotton)" className="border p-2 w-full mb-2" />
          <button type="button" onClick={handleAddIndustryField} className="bg-green-500 text-white px-4 py-2 rounded">
            Add Field
          </button>
        </div>
      )}
    </div> */}

    {/* <div className="mt-4">
      <button type="button" onClick={() => setShowPackagingDelivery(!showPackagingDelivery)} className="font-semibold text-blue-600">
        {showPackagingDelivery ? "Hide" : "Show"} Packaging and Delivery
      </button>
      {showPackagingDelivery && (
        <div className="mt-2">
          <input {...register("packaging_and_delivery.Packaging_Details")} placeholder="Packaging Details" className="border p-2 w-full" />
          <input {...register("packaging_and_delivery.Delivery_Time")} placeholder="Delivery Time" className="border p-2 w-full" />
        </div>
      )}
    </div> */}

    {/* <div className="mt-4">
      <button type="button" onClick={() => setShowOtherAttributes(!showOtherAttributes)} className="font-semibold text-blue-600">
        {showOtherAttributes ? "Hide" : "Show"} Other Attributes
      </button>
      {showOtherAttributes && (
        <div className="mt-2">
          <input {...register("other_attributes.Attribute_1")} placeholder="Attribute 1" className="border p-2 w-full" />
          <input {...register("other_attributes.Attribute_2")} placeholder="Attribute 2" className="border p-2 w-full" />
        </div>
      )}
    </div> */}
    {/* <div className="mt-4">
      <button type="button" onClick={() => setShowOtherAttributes2(!showOtherAttributes2)} className="font-semibold text-blue-600">
        {showOtherAttributes2 ? "Hide" : "Show"} Other Attributes 2
      </button>
      {showOtherAttributes2 && (
        <div className="mt-2">
          <input {...register("other_attributes2.Field_1")} placeholder="Field 1" className="border p-2 w-full" />
          <input {...register("other_attributes2.Field_2")} placeholder="Field 2" className="border p-2 w-full" />
        </div>
      )}
    </div> */}
  <h3 className="font-bold text-lg mt-4">Industry Specific Attributes</h3>
  {industryFields.map((field, index) => (
    <div key={field.id} className="border p-2 rounded mb-2">
      {Object.entries(field).map(
        ([key, value]) =>
          key !== "id" && (
            <input
              key={key}
              {...register(`industry_specific_attributes.${index}.${key}`)}
              placeholder={key}
              className="border p-2 w-full mb-1"
            />
          )
      )}
      <button type="button" onClick={() => removeIndustryField(index)} className="text-red-500">
        Remove
      </button>
    </div>
  ))}

  <div className="bg-gray-100 p-4 rounded">
    <h4 className="font-semibold mb-2">Add New Field</h4>
    <input
      value={newFieldKey}
      onChange={(e) => setNewFieldKey(e.target.value)}
      placeholder="Attribute Key (e.g., Material)"
      className="border p-2 w-full mb-2"
    />
    <input
      value={newFieldValue}
      onChange={(e) => setNewFieldValue(e.target.value)}
      placeholder="Attribute Value (e.g., 100% Cotton)"
      className="border p-2 w-full mb-2"
    />
    <button type="button" onClick={handleAddIndustryField} className="bg-green-500 text-white px-4 py-2 rounded">
      Add Field
    </button>
  </div>


  <h3>Packaging and Delivery</h3>
  {packagingFields?.map((field, index) => (
    <div key={field.id} className="border p-2 rounded mb-2">
      {Object.entries(field).map(
        ([key, value]) =>
          key !== "id" && (
            <input
              key={key}
              {...register(`packaging_and_delivery.${index}.${key}`)}
              placeholder={key}
              className="border p-2 w-full mb-1"
            />
          )
      )}
      <button type="button" onClick={() => removepackageField(index)} className="text-red-500">
        Remove
      </button>
    </div>
  ))}

  <div className="bg-gray-100 p-4 rounded">
    <h4 className="font-semibold mb-2">Add New Field</h4>
    <input
      value={newpackagekey}
      onChange={(e) => setNewpackageKey(e.target.value)}
      placeholder="Attribute Key (e.g., Material)"
      className="border p-2 w-full mb-2"
    />
    <input
      value={newpackageValue}
      onChange={(e) => setNewpackagevalue(e.target.value)}
      placeholder="Attribute Value (e.g., 100% Cotton)"
      className="border p-2 w-full mb-2"
    />
    <button type="button" onClick={handleAddpackagingField} className="bg-green-500 text-white px-4 py-2 rounded">
      Add Field
    </button>
  </div>


  <h3>Other Attributes</h3>
  {OtherAttribute?.map((field, index) => (
    <div key={field.id} className="border p-2 rounded mb-2">
      {Object.entries(field).map(
        ([key, value]) =>
          key !== "id" && (
            <input
              key={key}
              {...register(`other_attributes.${index}.${key}`)}
              placeholder={key}
              className="border p-2 w-full mb-1"
            />
          )
      )}
      <button type="button" onClick={() => removeOtherAttributesField(index)} className="text-red-500">
        Remove
      </button>
    </div>
  ))}

  <div className="bg-gray-100 p-4 rounded">
    <h4 className="font-semibold mb-2">Add New Field</h4>
    <input
      value={newOtherAttributekey}
      onChange={(e) => setNewOtherAttributeKey(e.target.value)}
      placeholder="Attribute Key (e.g., Material)"
      className="border p-2 w-full mb-2"
    />
    <input
      value={newOtherAttributeValue}
      onChange={(e) => setNewOtherAttributevalue(e.target.value)}
      placeholder="Attribute Value (e.g., 100% Cotton)"
      className="border p-2 w-full mb-2"
    />
    <button type="button" onClick={handleAddOtherAttributeField} className="bg-green-500 text-white px-4 py-2 rounded">
      Add Field
    </button>
  </div>


 


    <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded mt-6">
      Submit Product
    </button>
  </form>
  );
}
