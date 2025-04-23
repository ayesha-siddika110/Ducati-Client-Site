import React, { useState } from "react";

export default function Addmetarial({ onSave }) {
  const [materials, setMaterials] = useState([]);
  const [materialType, setMaterialType] = useState("");
  const [gsmEntries, setGsmEntries] = useState([{ gsm: "", prices: [{ min: "", max: "", price_per_piece: "" }] }]);

  const handleAddPriceEntry = (gsmIndex) => {
    const updated = [...gsmEntries];
    updated[gsmIndex].prices.push({ min: "", max: "", price_per_piece: "" });
    setGsmEntries(updated);
  };

  const handleRemovePriceEntry = (gsmIndex, priceIndex) => {
    const updated = [...gsmEntries];
    updated[gsmIndex].prices.splice(priceIndex, 1);
    setGsmEntries(updated);
  };

  const handleAddGSM = () => {
    setGsmEntries([...gsmEntries, { gsm: "", prices: [{ min: "", max: "", price_per_piece: "" }] }]);
  };

  const handleRemoveGSM = (gsmIndex) => {
    const updated = [...gsmEntries];
    updated.splice(gsmIndex, 1);
    setGsmEntries(updated);
  };

  const handleAddMaterial = () => {
    if (!materialType.trim()) return;

    const formatted = {
      [materialType]: {
        gsm: gsmEntries.reduce((acc, gsmObj) => {
          acc[gsmObj.gsm] = gsmObj.prices.map(p => ({
            min: Number(p.min),
            max: p.max ? Number(p.max) : null,
            price_per_piece: Number(p.price_per_piece),
          }));
          return acc;
        }, {}),
      }
    };

    setMaterials(prev => [...prev.filter(m => !m[materialType]), formatted]);
    setMaterialType("");
    setGsmEntries([{ gsm: "", prices: [{ min: "", max: "", price_per_piece: "" }] }]);
  };

  const handleDeleteMaterial = (name) => {
    setMaterials(prev => prev.filter(m => !m[name]));
  };

  const handleSave = () => {
    const finalData = materials.reduce((acc, mat) => ({ ...acc, ...mat }), {});
    console.log("Final Material Data:", finalData);
    if (onSave) onSave(finalData); // send to parent if needed
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Material Name"
          value={materialType}
          onChange={(e) => setMaterialType(e.target.value)}
        />
        {gsmEntries.map((gsmEntry, gsmIndex) => (
          <div key={gsmIndex} className="border p-3 rounded space-y-2 bg-gray-50">
            <div className="flex items-center gap-2">
              <input
                className="border p-2 rounded w-full"
                placeholder="GSM"
                value={gsmEntry.gsm}
                onChange={(e) => {
                  const updated = [...gsmEntries];
                  updated[gsmIndex].gsm = e.target.value;
                  setGsmEntries(updated);
                }}
              />
              <button onClick={() => handleRemoveGSM(gsmIndex)} className="text-red-600 text-sm">
                Remove GSM
              </button>
            </div>

            {gsmEntry.prices.map((price, priceIndex) => (
              <div key={priceIndex} className="flex gap-2 items-center">
                <input
                  className="border p-2 rounded w-1/4"
                  type="number"
                  placeholder="Min"
                  value={price.min}
                  onChange={(e) => {
                    const updated = [...gsmEntries];
                    updated[gsmIndex].prices[priceIndex].min = e.target.value;
                    setGsmEntries(updated);
                  }}
                />
                <input
                  className="border p-2 rounded w-1/4"
                  type="number"
                  placeholder="Max"
                  value={price.max}
                  onChange={(e) => {
                    const updated = [...gsmEntries];
                    updated[gsmIndex].prices[priceIndex].max = e.target.value;
                    setGsmEntries(updated);
                  }}
                />
                <input
                  className="border p-2 rounded w-1/4"
                  type="number"
                  placeholder="Price"
                  value={price.price_per_piece}
                  onChange={(e) => {
                    const updated = [...gsmEntries];
                    updated[gsmIndex].prices[priceIndex].price_per_piece = e.target.value;
                    setGsmEntries(updated);
                  }}
                />
                <button
                  onClick={() => handleRemovePriceEntry(gsmIndex, priceIndex)}
                  className="text-sm text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => handleAddPriceEntry(gsmIndex)}
              className="text-blue-500 text-sm"
            >
              + Add Price Entry
            </button>
          </div>
        ))}

        <button
          onClick={handleAddGSM}
          className="text-green-600 text-sm"
        >
          + Add GSM
        </button>
      </div>

      <button
        onClick={handleAddMaterial}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Material
      </button>

      {materials.length > 0 && (
        <div className="space-y-3 pt-4 border-t">
          <h3 className="text-lg font-bold">Materials</h3>
          {materials.map((mat, i) => {
            const name = Object.keys(mat)[0];
            return (
              <div key={i} className="border p-2 rounded bg-gray-100 flex justify-between items-center">
                <span>{name}</span>
                <button onClick={() => handleDeleteMaterial(name)} className="text-red-500 text-sm">
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">
            Save Materials
          </button>
        </div>
      )}
    </div>
  );
}
