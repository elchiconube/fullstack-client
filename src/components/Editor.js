import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const Editor = ({ onChange, value, name }) => {
  const editorRef = useRef();

  return (
    <div style={{ position: "relative" }}>
      <SunEditor
        ref={editorRef}
        name={name}
        id={name}
        setContents={value}
        onBlur={(e, v) => onChange(v)}
        setOptions={{
          // mode: "inline",
          // display: "block",
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
