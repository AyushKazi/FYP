import React from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { DropdownTableRow } from "../../components/Admin/Common/DropdownTableRow";

const AdminProducts = () => {
  return (
    <>
      <div className="pb-5 flex justify-between px-20">
        <h1 className="text-2xl font-medium">All products</h1>
        <div className="flex gap-x-3">
          <p className="p-2 bg-[#2c2c2c] px-4 rounded-md text-white cursor-pointer">
            Add Prodcut
          </p>
          <div className="min-w-[250px] bg-[#D9D9D9] p-5 rounded-md relative">
            <IoSearch className="absolute left-2 top-3 size-4" />
            <IoClose className="absolute right-2 top-3 size-4" />
            <input
              type="text"
              placeholder="Search"
              className="absolute top-1 left-8 p-1 pb-0 bg-[#D9D9D9] placeholder:text-[#686868] focus:border-none outline-none"
            />
          </div>
        </div>
      </div>

      <div className=" px-4 md:px-20 pb-10  overflow-x-scroll ">
        <table className="table-auto bg-[#2C2C2C] md:w-full  ">
          <thead className="rounded-lg">
            <tr>
              <th></th>
              <th className="p-3 py-4 text-start text-white">S.N.</th>
              <th className="p-3 py-4 text-start text-white">Name</th>
              <th className="p-3 py-4 text-start text-white">Price</th>
              <th className="p-3 py-4 text-start text-white">In Stock</th>
              <th className="p-3 py-4 text-start text-white">Category</th>
              <th className="p-3 py-4 text-start text-white">Brand</th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            <DropdownTableRow
              colSpanNumber={7}
              remainingTableRows={
                <>
                  <td className="p-3">2</td>
                  <td className="p-3">Iphone 14 pro max</td>
                  <td className="p-3">90,000</td>
                  <td className="p-3">3</td>
                  <td className="p-3">Phone</td>
                  <td className="p-3">Apple</td>
                </>
              }
              dropdownDiv={
                <div className="p-2 bg-white">
                  <p>Remaining Description</p>
                </div>
              }
            />
            <DropdownTableRow
              colSpanNumber={7}
              remainingTableRows={
                <>
                  <td className="p-3">2</td>
                  <td className="p-3">Iphone 14 pro max</td>
                  <td className="p-3">90,000</td>
                  <td className="p-3">3</td>
                  <td className="p-3">Phone</td>
                  <td className="p-3">Apple</td>
                </>
              }
              dropdownDiv={
                <div className="p-2 bg-white">
                  <p>Remaining Description 2</p>
                </div>
              }
            />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminProducts;
