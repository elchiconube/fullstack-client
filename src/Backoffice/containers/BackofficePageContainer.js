import BackofficePageForm from "../forms/BackofficePageForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPage,
  deletePage,
  fetchPage,
  fetchPages,
} from "../../actions/pages";

const BackofficePageContainer = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const { pages, page, isLoading } = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(fetchPages());
    return () => {};
  }, []);

  useEffect(() => {
    // page && setData(page);
  }, [page]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleDelete = (id) => dispatch(deletePage(id));

  const handleChange = (field, value) => {
    const dataUpdated = { [field]: value };
    setData(dataUpdated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPage(data));
  };

  const handleEdit = (id) => dispatch(fetchPage(id));

  return (
    <div>
      <ul>
        {pages && pages.length && !isLoading ? (
          pages.map(({ title, _id }) => (
            <li key={_id}>
              page: {title}
              <button onClick={() => handleDelete(_id)}>Delete</button>
              <button onClick={() => handleEdit(_id)}>Edit</button>
            </li>
          ))
        ) : (
          <h3>No pages</h3>
        )}
      </ul>
      <BackofficePageForm
        data={data}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
};
export default BackofficePageContainer;
