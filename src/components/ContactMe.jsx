import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const CONTACT_ENDPOINT = "??";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactMe = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    email: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <Card>
        <CardContent>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={data.email}
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
            value={data.content}
            onChange={handleChange}
          />
          <Button variant="contained">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMe;
