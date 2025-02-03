import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Popup from "./Popup";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData
      ? JSON.parse(savedData)
      : { id: Date.now(), name: "", email: "", phone: "", address: "" };
  });

  const [showSavedPopup, setShowSavedPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setShowSavedPopup(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        backgroundColor: "white",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        User Data Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, width: "100%" }}>
          Save
        </Button>
      </form>

      <Popup
        open={showSavedPopup}
        onClose={() => setShowSavedPopup(false)}
        message="Your data has been saved successfully!"
      />
    </Box>
  );
};

export default UserForm;
