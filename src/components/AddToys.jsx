/** @format */

import React, { useState } from "react";

const AddToys = () => {
  const [category, setCategory] = useState("");

  return (
    <>
      <form className="space-y-4 mx-6 md:mx-10 my-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Toy url</span>
              <input
                type="url"
                name="photo"
                placeholder="Toy url"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Toy name</span>
              <input
                type="text"
                name="toyName"
                required
                placeholder="Toy name"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Seller name</span>
              <input
                type="text"
                name="sellerName"
                placeholder="Seller name"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Seller email</span>
              <input
                type="email"
                name="sellerEmail"
                required
                placeholder="Seller email"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full h-full rounded-md  bg-[#cd33c848]">
            <label className="input-group input-group-vertical">
              <span>Category</span>
              <select
                defaultValue={"Select category"}
                onChange={(e) => setCategory(e.target.value)}
                className="select w-full max-w-xs outline-none border-none bg-transparent"
              >
                <option disabled>Select category</option>
                <option>Math</option>
                <option>Engineering</option>
                <option>Science</option>
              </select>
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Price</span>
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Ratting</span>
              <input
                type="number"
                min={0}
                name="ratting"
                placeholder="Ratting"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Quantity</span>
              <input
                type="number"
                min={0}
                name="quantity"
                required
                placeholder="Quantity"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="form-control w-full">
          <label htmlFor="details" className="input-group input-group-vertical">
            <span>Details</span>
            <textarea
              className="border-none outline-none bg-[#cd33c848] p-4"
              name="details"
              id="details"
              cols="6"
              rows="5"
            ></textarea>
          </label>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          <input type="submit" value="Add toy" className="primary-btn w-1/2" />
        </div>
      </form>
    </>
  );
};

export default AddToys;
