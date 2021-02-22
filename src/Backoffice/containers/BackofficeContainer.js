import { useState, useEffect } from "react";
import BackofficeCreateContainer from "./BackofficeCreateContainer";
import { fetchContents, deleteContent } from "../../actions/contents";
import { useDispatch, useSelector } from "react-redux";

const BackofficeContainer = () => {
  const [module, setModule] = useState("");
  const dispatch = useDispatch();
  const { contents, isLoading, error } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(fetchContents());
    return () => {};
  }, []);

  const handleDeleteContent = (id) => {
    dispatch(deleteContent(id));
  };

  return (
    <div>
      <h1>Backoffice</h1>
      <div>
        <h2>Menu</h2>
        <button onClick={() => setModule("create")}>Create</button>
      </div>
      <ul>
        {contents && contents.length && !isLoading ? (
          contents.map(({ title, _id }) => (
            <li>
              content: {title}
              <button onClick={() => handleDeleteContent(_id)}>Delete</button>
            </li>
          ))
        ) : (
          <h3>No posts</h3>
        )}
      </ul>
      {module === "create" && <BackofficeCreateContainer />}
    </div>
  );
};
export default BackofficeContainer;
