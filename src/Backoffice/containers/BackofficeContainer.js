import { useEffect } from "react";
import BackofficeCreateContainer from "./BackofficeCreateContainer";
import { fetchPages, deletePage } from "../../actions/pages";
import { useDispatch, useSelector } from "react-redux";

const BackofficeContainer = () => {
  const dispatch = useDispatch();
  const { pages, isLoading, error } = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(fetchPages());
    return () => {};
  }, []);

  const handleDeletePage = (id) => {
    dispatch(deletePage(id));
  };

  return (
    <div>
      <h1>Backoffice</h1>

      <ul>
        {pages && pages.length && !isLoading ? (
          pages.map(({ title, _id }) => (
            <li>
              page: {title}
              <button onClick={() => handleDeletePage(_id)}>Delete</button>
            </li>
          ))
        ) : (
          <h3>No pages</h3>
        )}
      </ul>
      <BackofficeCreateContainer />
    </div>
  );
};
export default BackofficeContainer;
