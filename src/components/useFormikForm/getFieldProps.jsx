const getFieldProps = (name) => ({
  ...formik.getFieldProps(name),
  error: formik.errors[name],
  touched: formik.touched[name],
});
