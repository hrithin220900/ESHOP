# RichTextEditor Component

A feature-rich text editor component built with `react-quill-new` for the ESHOP application.

## Features

- Full-featured WYSIWYG editor
- Customizable toolbar with comprehensive formatting options
- Support for headers, fonts, colors, lists, links, images, and more
- Server-side rendering (SSR) compatible
- TypeScript support
- Customizable themes (Snow and Bubble)
- Responsive design

## Usage

```tsx
import RichTextEditor from "@/packages/components/RichTextEditor";

function MyComponent() {
  const [content, setContent] = useState("");

  return <RichTextEditor value={content} onChange={setContent} placeholder="Enter your content here..." height="300px" />;
}
```

## Props

| Prop          | Type                      | Default              | Description                           |
| ------------- | ------------------------- | -------------------- | ------------------------------------- |
| `value`       | `string`                  | `""`                 | The HTML content of the editor        |
| `onChange`    | `(value: string) => void` | `undefined`          | Callback fired when content changes   |
| `placeholder` | `string`                  | `"Start writing..."` | Placeholder text when editor is empty |
| `readOnly`    | `boolean`                 | `false`              | Whether the editor is read-only       |
| `theme`       | `"snow" \| "bubble"`      | `"snow"`             | The Quill theme to use                |
| `height`      | `string`                  | `"200px"`            | Minimum height of the editor          |
| `className`   | `string`                  | `""`                 | Additional CSS classes                |

## Toolbar Features

The editor includes a comprehensive toolbar with:

- **Headers**: H1-H6 and normal text
- **Font**: Font family selection
- **Size**: Text size options (small, normal, large, huge)
- **Formatting**: Bold, italic, underline, strikethrough
- **Colors**: Text and background color pickers
- **Scripts**: Subscript and superscript
- **Lists**: Ordered and unordered lists
- **Indentation**: Increase/decrease indent
- **Alignment**: Left, center, right, justify
- **Special**: Blockquotes, code blocks
- **Media**: Links, images, videos
- **Utilities**: Clear formatting

## Styling

The component includes built-in styles that integrate well with Tailwind CSS. The editor uses the Snow theme by default, which provides a clean, modern interface.

## SSR Compatibility

The component is designed to work with Next.js and handles server-side rendering gracefully by dynamically importing the Quill editor only on the client side.

## Examples

### Basic Usage

```tsx
<RichTextEditor value={content} onChange={setContent} />
```

### Read-only Mode

```tsx
<RichTextEditor value={content} readOnly={true} />
```

### Custom Height and Styling

```tsx
<RichTextEditor value={content} onChange={setContent} height="400px" className="border-2 border-blue-500 rounded-lg" />
```

### Bubble Theme

```tsx
<RichTextEditor value={content} onChange={setContent} theme="bubble" />
```
