import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

const OrderListing = () => {
  const data = [
    {
      id: 1,
      service_name: "",
      details: "",
      status: "",
      views: "",
      leads: "",
      platforms: "",
      description: "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuaaaaaaaaaaaaaaaaaaaaaaaaaaammmmmmmmmmmmmmmmmmmmmgggggggggggggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkksssstrhhfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  return (
    <div className="p-2 sm:p-4 max-w-full sm:max-w-5xl mx-auto space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-600">
          Orders
        </h2>
      </div>
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full border border-gray-300 text-xs sm:text-sm text-left text-gray-500">
          <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th
                scope="col"
                className="border-b border-gray-300 px-3 py-2 whitespace-nowrap"
              >
                Id
              </th>
              <th
                scope="col"
                className="border-b border-gray-300 px-3 py-2 whitespace-nowrap"
              >
                Service Name
              </th>
              <th
                scope="col"
                className="border-b border-gray-300 px-3 py-2 whitespace-nowrap"
              >
                Details
              </th>
              <th
                scope="col"
                className="border-b border-gray-300 px-3 py-2 whitespace-nowrap"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((company) => (
              <tr
                key={company.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {company.id}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {company.service_name}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
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
                          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-start">
                            <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                              Days:
                            </p>
                            <p className="break-words w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-gray-50 rounded col-span-1 sm:col-span-4">
                              {company.days}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-5 items-start">
                            <p className="px-2 sm:px-4 py-2 font-semibold col-span-1 text-gray-700">
                              Description:
                            </p>
                            <p className="break-words w-full px-2 sm:px-4 py-2 font-medium text-gray-600 bg-gray-50 rounded col-span-1 sm:col-span-4">
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
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="text-green-600 font-semibold">
                    {company.status || "Active"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderListing;
