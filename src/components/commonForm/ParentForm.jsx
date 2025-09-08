import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SingleInput from "./SingleInput";

function ParentForm() {
  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      col: "col-span-1 md:col-span-2",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      col: "col-span-1 md:col-span-2",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      col: "col-span-1 md:col-span-1",
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      col: "col-span-1 md:col-span-1",
      options: [
        { label: "User", value: "user" },
        { label: "Admin", value: "admin" },
        { label: "Guest", value: "guest" },
      ],
    },
  ];

  const initialValues = formFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const validationSchema = Yup.object(
    formFields.reduce((acc, field) => {
      switch (field.type) {
        case "email":
          acc[field.name] = Yup.string()
            .email("Invalid email")
            .required("Email is required");
          break;
        case "password":
          acc[field.name] = Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required");
          break;
        case "select":
          acc[field.name] = Yup.string().required(`${field.label} is required`);
          break;
        default:
          acc[field.name] = Yup.string().required(`${field.label} is required`);
      }
      return acc;
    }, {})
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Register User</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map((field, idx) => (
            <SingleInput key={idx} field={field} formik={formik} />
          ))}
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ParentForm;
