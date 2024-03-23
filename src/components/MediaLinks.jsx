import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const iconStyle = {
  height: "50px",
  width: "50px",
  fontSize: "36px",
  borderRadius: "50%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
};

const MediaLinks = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
      }}
    >
      <Link to={"https://github.com/PrestonPolston"}>
        <IconButton style={iconStyle} sx={{ mr: 2, p: 1 }}>
          <Badge>
            <GitHubIcon />
          </Badge>
        </IconButton>
      </Link>

      <Link to={"www.linkedin.com/in/prestonpolston"}>
        <IconButton style={iconStyle} sx={{ p: 1 }}>
          <Badge>
            <LinkedInIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default MediaLinks;
