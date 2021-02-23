import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPage } from "../../actions/pages";
import Editor from "../../components/Editor";

const BackofficeCreateForm = () => {
  const [pageData, setContentData] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const clear = () => {
    setContentData({
      title: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPage(pageData));
  };

  const handleChange = (field, value) => {
    console.log({ field, value });
    setContentData({ ...pageData, [field]: value });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <h6>Creating a page</h6>
      <label>
        Title
        <input
          name="title"
          type="text"
          defaultValue={pageData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          required
        />
      </label>

      <Editor
        value={pageData.description}
        handleChange={(value) => handleChange("description", value)}
      />
      <button type="submit">Submit</button>
      <button onClick={clear}>Clear</button>
    </form>
  );
};

export default BackofficeCreateForm;
