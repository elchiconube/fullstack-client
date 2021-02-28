import { useState } from "react";

const BackofficeAddRemoveContents = ({
  attachments,
  availables,
  currentId,
  handleOnAddContent,
  handleOnRemoveContent,
  title,
}) => {
  const [show, setShow] = useState(false);

  const handleOnRemoveElement = (id) => {
    setShow(false);
    handleOnRemoveContent(id);
  };

  const handleOnAddElement = (id, title) => {
    setShow(false);
    handleOnAddContent(id, title);
  };

  console.log(attachments);
  return (
    <div>
      <h3>{title}</h3>
      <button type="button" onClick={() => setShow(!show)}>
        {show ? "Close" : "Add"} {title}
      </button>
      <ul>
        {show && availables && availables.length
          ? availables.map(({ title, _id }) => {
              if (
                currentId !== _id &&
                attachments.some(({ id }) => id !== _id)
              ) {
                return (
                  <li key={_id}>
                    {title}
                    <button
                      type="button"
                      onClick={() => handleOnAddElement(_id, title)}
                    >
                      Add
                    </button>
                  </li>
                );
              } else {
                return <p>No contents to attach</p>;
              }
            })
          : null}
      </ul>
      {!show && attachments && attachments.length ? (
        <div>
          <h4>Attachments</h4>
          <ul>
            {attachments.map(({ title, _id }) => (
              <li key={_id}>
                {title}
                <button
                  onClick={() => handleOnRemoveElement(_id)}
                  type="button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div></div>
    </div>
  );
};

export default BackofficeAddRemoveContents;
