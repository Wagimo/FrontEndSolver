import React from "react";

type Props = {};

const InvoiceNew = (props: Props) => {
  return (
    <div className="md:justify-center flex  md:m-5 md:p-5 bg-white  rounded-3xl">
      <form className=" px-5 py-5 md:w-2/3 w-full ">
        <div className="mb-6">
          <label
            htmlFor="txtInvoiceNumber"
            className="block font-bold uppercase"
          >
            Invoice Number
          </label>
          <input
            id="txtInvoiceNumber"
            type="text"
            placeholder="Invoice Number"
            className="text-gray-500 border-2 p-2 rounded-md mt-2 md:w-1/3 w-full placeholder-orange-300"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="txtInvoiceDate" className="block font-bold uppercase">
            Invoice Date
          </label>
          <input
            id="txtInvoiceDate"
            type="date"
            placeholder="Invoice Date"
            className="text-gray-500 border-2 p-2 rounded-md mt-2 md:w-1/3 w-full placeholder-orange-300"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="txtInvoiceClient"
            className="block font-bold uppercase"
          >
            Invoice Client
          </label>
          <input
            id="txtInvoiceClient"
            type="text"
            placeholder="Invoice Client"
            className="text-gray-500 border-2 p-2 rounded-md mt-2  w-full placeholder-orange-300"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="txtInvoiceClientEmail"
            className="block font-bold uppercase"
          >
            Invoice Client Email
          </label>
          <input
            id="txtInvoiceClientEmail"
            type="email"
            placeholder="Invoice Client Email"
            className="text-gray-500 border-2 p-2 rounded-md mt-2 w-full placeholder-orange-300"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="txtInvoiceAmount"
            className="block font-bold uppercase"
          >
            Invoice Amount
          </label>
          <input
            id="txtInvoiceAmount"
            type="text"
            placeholder="Invoice Amount"
            className="text-gray-500 border-2 p-2 rounded-md mt-2 md:w-1/3 w-full placeholder-orange-300"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="txtInvoiceDescription"
            className="block font-bold uppercase"
          >
            Invoice Description
          </label>
          <textarea
            id="txtInvoiceDescription"
            placeholder="Invoice Description"
            className="text-gray-500 border-2 p-2 rounded-md mt-2 w-full placeholder-orange-300"
          />
        </div>
        <input
          type="submit"
          className="bg-red-800 w-full p-3 rounded-md text-white font-bold uppercase"
          value="Save Invoice"
        />
      </form>
    </div>
  );
};

export default InvoiceNew;
