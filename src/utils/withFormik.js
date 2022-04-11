import { withFormik } from "formik";

const Formik = (Component, validationSchema, initialValues, handleSubmit) => {
  let mapPropsToValues = null;
  if (typeof initialValues === "function") {
    mapPropsToValues = initialValues;
  } else {
    mapPropsToValues = () => initialValues;
  }
  const formikEnhancer = withFormik({
    validationSchema,
    mapPropsToValues,
    handleSubmit,
    enableReinitialize: true,
  });
  return formikEnhancer(Component);
};

export default Formik;
