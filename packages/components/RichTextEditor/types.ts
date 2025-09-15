export interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  theme?: "snow" | "bubble";
  height?: string;
  className?: string;
}

export interface QuillModule {
  toolbar?: {
    container: Array<Array<string | { [key: string]: any }>>;
  };
  clipboard?: {
    matchVisual: boolean;
  };
}

export type QuillFormat =
  | "header"
  | "font"
  | "size"
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "color"
  | "background"
  | "script"
  | "list"
  | "bullet"
  | "indent"
  | "direction"
  | "align"
  | "blockquote"
  | "code-block"
  | "link"
  | "image"
  | "video";
