import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

const CONTACT_ENDPOINT = "https://your-contact-form-endpoint.com/api";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    content: "",
    emailError: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = emailRegex.test(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      emailError: !isEmailValid && value !== "" ? "Invalid Email" : "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailRegex.test(formData.email)) {
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Contact Me Me</h2>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              error={formData.emailError !== ""}
              helperText={formData.emailError}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              multiline
              rows={5}
              id="content"
              label="Content"
              name="content"
              autoComplete="content"
              value={formData.content}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMe;
