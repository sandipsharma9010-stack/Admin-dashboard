// components/CommonForm.jsx
import React from 'react';
import { Formik, Form } from 'formik';

import TextInput from './fields/TextInput';
import NumberInput from './fields/NumberInput';
import EmailInput from './fields/EmailInput';
import SelectInput from './fields/SelectInput';

// const COMPONENT_MAP = {
//   text: TextInput,
//   number: NumberInput,
//   email: EmailInput,
//   select: SelectInput,
// };

const CommonForm = ({ fields, initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {/* {fields.map((field) => {
          const Component = COMPONENT_MAP[field.type];
          if (!Component) return null;

          return (
            <Component
              key={field.name}
              name={field.name}
              label={field.label}
              options={field.options || []}
            />
          );
        })} */}

        <TextInput/>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default CommonForm;
