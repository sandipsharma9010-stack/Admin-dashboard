import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function CommonForm({ col }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      topic: "",
      message: "",
    },
    validationSchema: Yup.object({  
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      phone: Yup.string().required("Phone is required"),
      address: Yup.string().required("Address is required"),
      topic: Yup.string().required("Country is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Form submitted! Check console for values.");
    },
  });

  return (
    <div className="bg-white shadow-md p-10 rounded-md flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className={`grid ${col}`}>
       
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full border border-gray-600 rounded-md p-2 my-2"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full border border-gray-600 rounded-md p-2 my-2"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>

      
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full border border-gray-600 rounded-md p-2 my-2"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && (
              <div className="text-red-500">{formik.errors.phone}</div>
            )}
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full border border-gray-600 rounded-md p-2 my-2"
              id="address"
              type="text"
              placeholder="Enter your address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.errors.address && (
              <div className="text-red-500">{formik.errors.address}</div>
            )}
          </div>

        
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <select
              name="topic"
              value={formik.values.topic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-600 rounded-md p-2 my-2"
              id="topic"
            >
              <option value="">Select a country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
            </select>
            {formik.errors.topic && (
              <div className="text-red-500">{formik.errors.topic}</div>
            )}
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full border border-gray-600 rounded-md p-2 my-2"
              id="message"
              type="text"
              placeholder="Enter your message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.errors.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}
          </div>
        </div>

     
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommonForm;
