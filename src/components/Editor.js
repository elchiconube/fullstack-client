import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const Editor = ({ handleChange, value }) => {
  const handleBlur = (event, editorContents) => {
    console.log(event, editorContents);
    handleChange(editorContents);
  };
  return (
    <div style={{ position: "relative" }}>
      <SunEditor
        setContents={value}
        onBlur={handleBlur}
        setOptions={{
          mode: "inline",
          display: "block",
          width: "100%",
          height: "204",
          buttonList: [
            ["fontSize", "bold", "underline", "italic", "link"],
            ["image", "video"],
            ["align", "list", "table"],
          ],
          popupDisplay: "full",
          placeholder: "Type something...",
        }}
      />
    </div>
  );
};

export default Editor;
