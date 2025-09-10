import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";

const ParentDataForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      address2: "",
      age: "",
      textarea: "",
      gender: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      address2: Yup.string().required("Address2 is required"),
      age: Yup.number()
        .required("Quantity is required")
        .min(1, "Quantity must be at least 1")
        .integer("Quantity must be an integer"),
      textarea: Yup.string().required("textarea is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <div className="flex justify-center my-8">
      <form
        className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 space-y-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            label="Name *"
            name="name"
            placeholder="Enter Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />

          <TextInput
            label="Address *"
            name="address"
            placeholder="Enter Your Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.address}
            touched={formik.touched.address}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            label="Address2 *"
            name="address2"
            placeholder="Enter Your Address2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.address2}
            touched={formik.touched.address2}
          />

          <NumberInput
            label="Number *"
            name="age"
            placeholder="Enter Your Number"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.age}
            touched={formik.touched.age}
          />
        </div>
        <TextArea
          label="Description *"
          name="textarea"
          placeholder="Enter Your Description"
          value={formik.values.textarea}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.textarea}
          touched={formik.touched.textarea}
        />

        <SelectInput
          label="Gender *"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.gender}
          touched={formik.touched.gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />

        <button
          className="mt-3 bg-blue-800 px-3 py-2 rounded text-white mx-auto block"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParentDataForm;
