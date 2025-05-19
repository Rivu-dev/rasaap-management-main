import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import { PenBox, Trash2 } from "lucide-react";

const initialFormData = {
  userName: "",
  email: "",
  role: "",
  password: "",
};
const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];
const Package = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
    product: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!" + JSON.stringify(form));
  };
  // Static data based on your image
  const data = [
    {
      id: 1,
      name: "",
      description: "",
      product: "",
      action: "",
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit company with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete company with id:", id);
  };

  return (
    <div className="p-4 sm:p-6 max-w-full sm:max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-indigo-600">Packages</h2>
      </div>
      <div className="mb-5 w-full flex justify-end">
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => {
            setOpenSheet(true);
            setFormData(initialFormData);
          }}
        >
          Add New Package
        </Button>
      </div>
      <Sheet open={openSheet} onOpenChange={() => setOpenSheet(false)}>
        <SheetContent
          side="right"
          className="overflow-auto w-full max-w-full sm:max-w-md"
        >
          <SheetHeader>
            <form
              className="flex flex-col gap-6 p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-xs sm:max-w-xs mx-auto mt-8"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-bold text-red-500 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition placeholder-gray-400"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-500 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition placeholder-gray-400"
                  placeholder="Enter description"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-500 mb-1">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-500 hover:file:bg-red-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-500 mb-1">
                  Product
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition bg-gray-50 text-gray-700"
                  required
                >
                  <option value="">Select a product</option>
                  {products.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-500 text-white font-bold rounded-lg py-2 mt-2 shadow hover:from-red-700 hover:to-red-600 transition"
              >
                Submit
              </button>
            </form>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full border border-gray-300 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th
                scope="col"
                className="border-b border-gray-300 px-2 sm:px-4 py-2"
              >
                Name
              </th>
              <th
                scope="col"
                className="border-b border-gray-300 px-2 sm:px-4 py-2"
              >
                Description
              </th>
              <th
                scope="col"
                className="border-b border-gray-300 px-2 sm:px-4 py-2"
              >
                Product
              </th>
              <th
                scope="col"
                className="border-b border-gray-300 px-2 sm:px-4 py-2"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((company) => (
              <tr
                key={company.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {company.name}
                </td>
                <td className="px-2 sm:px-6 py-4">{company.description}</td>
                <td className="px-2 sm:px-6 py-4">{company.product}</td>
                <td className="px-2 sm:px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(company.id)}
                    className="font-medium text-green-600 hover:underline"
                  >
                    <PenBox />
                  </button>
                  <button
                    onClick={() => handleDelete(company.id)}
                    className="font-medium text-red-600 hover:underline"
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Package;
