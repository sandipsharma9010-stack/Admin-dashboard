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
        .required("Age is required")
        .positive("Must be positive"),
      textarea: Yup.string().required("textarea is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <div className="flex justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />

          <TextInput
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.address}
            touched={formik.touched.address}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            label="Address 2"
            name="address2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.address2}
            touched={formik.touched.address2}
          />

          <NumberInput
          
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.age}
            touched={formik.touched.age}
          />
        </div>
        <TextArea
          label="Description"
          name="textarea"
          value={formik.values.textarea}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.textarea}
          touched={formik.touched.textarea}
        />

        <SelectInput
          label="Gender"
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
