import React, { useState, memo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import "./Editor.scss";

const Editor = ({ setQuery, query, executeQuery }) => {
  const [content, setContent] = useState(query);
  return (
    <div className="editor">
      <h2 className="heading">SQL Compiler</h2>
      <CodeMirror
        value={content}
        extensions={[sql()]}
        onChange={(value, viewUpdate) => {
          setContent(value);
        }}
      />
      <div className="buttons">
        <button
          className="run button"
          onClick={() => {
            setQuery(content);
            executeQuery(content);
          }}
        >
          Run
        </button>
        <button
          className="clear button"
          onClick={() => {
            setContent("");
            setQuery("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(Editor);
