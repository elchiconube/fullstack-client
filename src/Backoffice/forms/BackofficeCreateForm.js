import { useState } from "react";
import { useDispatch } from "react-redux";

import { createContent } from "../../actions/contents";
import Editor from "../../components/Editor";

const BackofficeCreateForm = () => {
  const [contentData, setContentData] = useState({
    title: "",
    message: "",
  });

  const dispatch = useDispatch();

  const clear = () => {
    setContentData({
      title: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContent(contentData));
  };

  const handleChange = (field, value) => {
    console.log({ field, value });
    setContentData({ ...contentData, [field]: value });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <h6>Creating a content</h6>
      <label>
        Title
        <input
          name="title"
          type="text"
          defaultValue={contentData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          required
        />
      </label>

      <Editor
        value={contentData.message}
        handleChange={(value) => handleChange("message", value)}
      />
      <button type="submit">Submit</button>
      <button onClick={clear}>Clear</button>
    </form>
  );
};

export default BackofficeCreateForm;
