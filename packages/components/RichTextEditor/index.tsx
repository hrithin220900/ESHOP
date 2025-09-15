import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { RichTextEditorProps, QuillModule, QuillFormat } from "./types";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-md" />,
});

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value = "",
  onChange,
  placeholder = "Write a detailed description here...",
  readOnly = false,
  theme = "snow",
  height = "200px",
  className = "",
}) => {
  // Quill modules configuration
  const modules: QuillModule = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ align: [] }],
          ["blockquote", "code-block"],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  // Quill formats
  const formats: QuillFormat[] = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "list",

    "indent",
    "direction",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
  ];

  return (
    <div className={`rich-text-editor ${className}`}>
      <style>{`
        .rich-text-editor :global(.ql-editor) {
          min-height: ${height};
          font-family: inherit;
        }

        .rich-text-editor :global(.ql-editor.ql-blank::before) {
          font-style: normal;
          color: #9ca3af;
        }

        .ql-toolbar.ql-snow {
          border: 1px solid #374151 !important;
          border-bottom: none !important;
          border-radius: 0.375rem 0.375rem 0 0 !important;
        }

        .ql-container.ql-snow {
          border: 1px solid #374151 !important;
          border-radius: 0 0 0.375rem 0.375rem !important;
        }

        .ql-editor {
          height: 250px !important;
        }

        .ql-editor.ql-blank::before {
          color: white !important;
          opacity: 0.6; 
        }

        .ql-toolbar .ql-stroke {
          stroke: white !important;
        }

        .ql-toolbar .ql-fill {
          fill: white !important;
        }

        .ql-toolbar .ql-picker {
          color: white !important;
        }

        .ql-toolbar .ql-picker-label {
          color: white !important;
        }

        .ql-toolbar .ql-picker-item {
          color: white !important;
        }

        .ql-toolbar span.ql-picker-label::before,
        .ql-toolbar .ql-picker-item::before {
          color: white !important;
        }
      `}</style>
      <ReactQuill
        theme={theme}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder="Write a detailed description here..."
        modules={modules}
        formats={formats}
        style={{ minHeight: "250px" }}
      />
    </div>
  );
};

export default RichTextEditor;
