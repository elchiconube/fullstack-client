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
    components: [],
  });
  const [description, setDescription] = useState("");

  const { pages, page, isLoading } = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(fetchPages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    page && setData(page);
  }, [page]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    description && setData({ ...data, description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);

  const handleDeletePage = (id) => dispatch(deletePage(id));

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDescription = (value) => {
    setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPage(data));
  };

  const handleEditPage = (id) => dispatch(fetchPage(id));

  const handleOnAddSubpage = (id, title) => {
    const subpages = data.components.find(({ type }) => type === "subpages");
    console.log(subpages);
    if (subpages) {
      // subpages.list = [...subpages.list, { title, id } ]
      // setData({
      //   ...data,
      //   components: [
      //     ...data.components,
      //     { type: "subpages", list: [{ title, id }] },
      //   ],
      // });
    } else {
      setData({
        ...data,
        components: [
          ...data.components,
          { type: "subpages", list: [{ title, id }] },
        ],
      });
    }
  };

  const handleOnRemoveSubpage = (id) => {
    const subpages = data.components.filter(({ type }) => type === "subpages");
    console.log(subpages);
    // setData({ ...data, subpages: subpages });
  };

  return (
    <div>
      <ul>
        {pages && pages.length && !isLoading ? (
          pages.map(({ title, _id }) => (
            <li key={_id}>
              page: {title}
              <button onClick={() => handleDeletePage(_id)}>Delete</button>
              <button onClick={() => handleEditPage(_id)}>Edit</button>
            </li>
          ))
        ) : (
          <h3>No pages</h3>
        )}
      </ul>
      {data && (
        <BackofficePageForm
          pages={pages}
          onAddSubpage={handleOnAddSubpage}
          onRemoveSubpage={handleOnRemoveSubpage}
          data={data}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onChangeDescription={handleChangeDescription}
        />
      )}
    </div>
  );
};
export default BackofficePageContainer;
