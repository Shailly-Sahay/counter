import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography, Button } from "@mui/material";
import Popup from "./Popup";

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState(
    () => localStorage.getItem("richText") || ""
  );
  const [showSavePopup, setShowSavePopup] = useState(false);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleSave = () => {
    localStorage.setItem("richText", content);
    setShowSavePopup(true);
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" mb={2}>
        Rich Text Editor
      </Typography>
      <ReactQuill value={content} onChange={handleContentChange} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
        Save Changes
      </Button>

      <Popup
        open={showSavePopup}
        onClose={() => setShowSavePopup(false)}
        message="Your changes have been saved successfully!"
      />
    </Box>
  );
};

export default RichTextEditor;
