import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import prestonPics from "../photos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, Link, Popper, Typography } from "@mui/material";

const Landing = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("prestonpolston@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Preston Polston</h1>
        <Link href="mailto:prestonpolston@gmail.com" underline="none">
          <Button variant="contained">Contact Me</Button>
        </Link>
        <Button onClick={copyToClipboard}>
          {copied && "saved to clipboard"}
          <ContentCopyIcon />
        </Button>
      </div>
      <Box
        sx={{
          width: "60%",
          height: "75vh",
          overflowY: "scroll",
          margin: "0 auto",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {prestonPics.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default Landing;
