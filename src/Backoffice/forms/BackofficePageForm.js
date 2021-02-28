import Editor from "../../components/Editor";
import styled from "styled-components";
import BackofficeAddRemoveContents from "../components/BackofficeAddRemoveContents";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-gap: 21px;
`;
const BackofficeCreateForm = ({
  onSubmit,
  data,
  pages,
  onChange,
  onChangeDescription,
  onAddSubpage,
  onRemoveSubpage,
}) => {
  const { _id, title, description, components } = data;

  const subpages = components.find(({ type }) => type === "subpages");

  return (
    <form onSubmit={onSubmit}>
      <h3>{_id ? "Editing" : "Creating"} a page</h3>
      <StyledGrid>
        <div>
          <div>
            <label>
              Title
              <input
                name="title"
                onChange={onChange}
                placeholder="Type a title"
                required
                type="text"
                defaultValue={title || ""}
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <Editor
                name="description"
                value={description}
                onChange={onChangeDescription}
              />
            </label>
          </div>
          <BackofficeAddRemoveContents
            attachments={subpages ? subpages.list : []}
            availables={pages}
            currentId={_id}
            handleOnAddContent={onAddSubpage}
            handleOnRemoveContent={onRemoveSubpage}
            title="Subpages"
          />
        </div>
        <div>
          <button type="submit">{_id ? "Update" : "Submit"}</button>
        </div>
      </StyledGrid>
    </form>
  );
};

export default BackofficeCreateForm;
