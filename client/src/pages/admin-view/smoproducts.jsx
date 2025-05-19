import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { PenBox, Trash2 } from "lucide-react";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];

const initialFormData = {
  userName: "",
  email: "",
  role: "",
  password: "",
};
const Smoproducts = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOption = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
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
      name: "Marketing",
      price: "3000",
      days: "10",
      image: "",
      action: "",
      description:
        "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuaaaaaaaaaaaaaaaaaaaaaaaaaaammmmmmmmmmmmmmmmmmmmmgggggggggggggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkksssstrhhfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      views: "10-50k+",
      leads: "50-100+",
    },
  ];

  // Static handlers for buttons (would be implemented in real app)
  const handleEdit = (id) => {
    console.log("Edit company with id:", id);
    // In a real app, you would implement edit functionality here
  };

  const handleDelete = (id) => {
    console.log("Delete company with id:", id);
    // In a real app, you would implement delete functionality here
  };

  return (
    <div className="p-4 sm:p-6 max-w-full sm:max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-indigo-600">SMO Products</h2>
      </div>
      <div className="mb-5 w-full flex justify-end">
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => {
            setOpenSheet(true);
            setFormData(initialFormData);
          }}
        >
          Add New SMO Product
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
                <label className="block text-red-600 font-semibold mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border border-red-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  min="0"
                  step="1"
                  required
                />
              </div>
              <div>
                <label className="block text-red-600 font-semibold mb-1">
                  Days
                </label>
                <input
                  type="number"
                  name="days"
                  value={form.days}
                  onChange={handleChange}
                  className="w-full border border-red-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  min="0"
                  step="1"
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
                <label className="block text-red-600 font-semibold mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border border-red-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter description"
                  required
                />
              </div>
              <div>
                <label className="block text-red-600 font-semibold mb-1">
                  Monthly Views
                </label>
                <input
                  type="text"
                  name="views"
                  value={form.views}
                  onChange={handleChange}
                  className="w-full border border-red-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter Monthly Views"
                  required
                />
              </div>
              <div>
                <label className="block text-red-600 font-semibold mb-1">
                  Expected Leads
                </label>
                <input
                  type="number"
                  name="leads"
                  value={form.leads}
                  onChange={handleChange}
                  className="w-full border border-red-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter Expected Leads"
                  required
                />
              </div>
              <div className="relative w-64">
                <button
                  className="w-full bg-white border border-pink-300 rounded px-4 py-2 text-left text-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => setOpen((o) => !o)}
                >
                  {selected.length > 0
                    ? options
                        .filter((o) => selected.includes(o.value))
                        .map((o) => o.label)
                        .join(", ")
                    : "Select options"}
                  <span className="float-right text-red-400">▼</span>
                </button>
                {open && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-pink-300 rounded shadow">
                    {options.map((option) => (
                      <label
                        key={option.value}
                        className="block items-center px-4 py-2 text-red-400 font-semibold mb-1 hover:bg-pink-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selected.includes(option.value)}
                          onChange={() => toggleOption(option.value)}
                          className="mr-2 accent-red-400"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-500 text-white font-bold rounded-lg py-2 mt-2 shadow hover:from-red-700 hover:to-red-600 transition"
              >
                Submit
              </button>
            </form>
          </SheetHeader>
          <div className="py-6"></div>
        </SheetContent>
      </Sheet>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-xs sm:text-sm text-left text-gray-500">
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
                  Price
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-300 px-2 sm:px-4 py-2"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-300 px-2 sm:px-4 py-2"
                >
                  Details
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
                  <td className="px-2 sm:px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    {company.name}
                  </td>
                  <td className="px-2 sm:px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    {company.price}
                  </td>
                  <td className="px-2 sm:px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    {company.image}
                  </td>
                  <td>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                          Details
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[805px] w-full max-w-xs sm:w-auto max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-100">
                        <DialogHeader>
                          <DialogTitle className="text-lg sm:text-2xl font-bold text-blue-700 mb-2">
                            Facility Details
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-2 sm:py-4">
                          <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-5 items-start min-w-0">
                              <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                                Days:
                              </p>
                              <p className="break-all w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-transparent rounded col-span-1 sm:col-span-4">
                                {company.days}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-5 items-start">
                              <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                                Description:
                              </p>
                              <p className="break-words w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-transparent rounded col-span-1 sm:col-span-4">
                                {company.description}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-5 items-start">
                              <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                                Monthly Views:
                              </p>
                              <p className="break-words w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-gray-50 rounded col-span-1 sm:col-span-4">
                                {company.views}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-5 items-start">
                              <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                                Expected Leads:
                              </p>
                              <p className="break-words w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-gray-50 rounded col-span-1 sm:col-span-4">
                                {company.leads}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-5 items-start">
                              <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                                Platforms Covered:
                              </p>
                              <p className="break-words w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-gray-50 rounded col-span-1 sm:col-span-4">
                                {company.platforms}
                              </p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>
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
    </div>
  );
};

export default Smoproducts;
