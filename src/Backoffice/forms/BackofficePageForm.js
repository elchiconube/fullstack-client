import Editor from "../../components/Editor";

const BackofficeCreateForm = ({ onSubmit, data, onChange, onClear }) => {
  const { title, description } = data;
  return (
    <form autoComplete="off" noValidate onSubmit={onSubmit}>
      <h3>Creating a page</h3>
      <label>
        Title
        <input
          name="title"
          type="text"
          defaultValue={title}
          onChange={(e) => onChange("title", e.target.value)}
          required
        />
      </label>
      <label>
        Description
        <Editor
          value={description}
          handleChange={(value) => onChange("description", value)}
        />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BackofficeCreateForm;
