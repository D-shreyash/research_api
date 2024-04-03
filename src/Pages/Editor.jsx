import { Container, Box } from "@mui/material"; // Importing Container and Box from Material-UI
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const Editor = () => {
  const [value, setValue] = React.useState("");
  const [Cite, SetCite] = React.useState("");

  const handleChange = (event) => {
    SetCite(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ maxWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">CITE</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Cite}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>IEEE</MenuItem>
            <MenuItem value={20}>APA 7</MenuItem>
            <MenuItem value={30}>Harword</MenuItem>
            <MenuItem value={30}>MLA</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ height: "500px", margin: "2rem" }}>
        <ReactQuill
          modules={modules}
          placeholder="Compose here"
          value={value}
          onChange={setValue}
          formats={formats}
          theme="snow"
          style={{ height: "100%" }}
        />
      </Box>
    </Container>
  );
};

export default Editor;
