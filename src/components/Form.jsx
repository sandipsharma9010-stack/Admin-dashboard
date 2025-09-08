import React from "react";
import { useFormik } from "formik";

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      else if(values.name.length<10){
          errors.name="Name must be at least 10 characters long";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) {
        errors.phone = "Phone is required";
      }
      if (!values.address) {
        errors.address = "Address is required";
      }
      if (!values.message) {
        errors.message = "Message is required";
      }
      else if(values.message.length<20){
          errors.message="Message must be at least 20 characters long";
      }
      return errors;
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      
      <form onSubmit={formik.handleSubmit}>
        <label>
          <input
            className="w-2/5 border-2 rounded-xl p-2 my-2"
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br/>
          {formik.errors.name && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}
        </label>
       
        <label>
          <input
            className="w-2/5 border-2 rounded-xl p-2 my-2"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
           <br/>
          {formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </label>
        
        <label>
          <input
            className="w-2/5 border-2 rounded-xl p-2 my-2"
            id="phone"
            type="text"
            placeholder="Enter your phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
           <br/>
          {formik.errors.phone && (
            <div className="text-red-500">{formik.errors.phone}</div>
          )}
        </label>
        
        <label>
          <input
            className="w-2/5 border-2 rounded-xl p-2 my-2"
            id="address"
            type="text"
            placeholder="Enter your address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
           <br/>
          {formik.errors.address && (
            <div className="text-red-500">{formik.errors.address}</div>
          )}
        </label>
        
        <label>
          <input
            className="w-2/5 border-2 rounded-xl p-2 my-2"
            id="message"
            type="text"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            value={formik.values.message}
           
          />
           <br/>
          {formik.errors.message && (
            <div className="text-red-500">{formik.errors.message}</div>
          )}
        </label>
        
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
