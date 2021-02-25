import Editor from "../../components/Editor";
import { useFormik } from "formik";
import * as Yup from "yup";

const BackofficeCreateForm = ({ onSubmit, data, onChange, onClear }) => {
  const { title, description } = data;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Need title"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    async onSubmit({ title, description }, { setSubmitting }) {
      await onSubmit({ title, description });
    },
  });

  const {
    handleSubmit,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    dirty,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={isSubmitting ? "loading" : null}>
      <h3>Creating a page</h3>
      <div>
        <label>
          Title
          <input
            disabled={isSubmitting}
            name="title"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Type a title"
            required
            type="text"
            value={values.title}
          />
        </label>
      </div>
      <div>
        <label>
          Description
          <Editor
            value={description}
            handleChange={(value) => onChange("description", value)}
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BackofficeCreateForm;
