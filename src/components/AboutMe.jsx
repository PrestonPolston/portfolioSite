import Carousel from "react-material-ui-carousel";
import prestonPics from "../photos";

const AboutMe = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h2>About Prestonon</h2>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Carousel>
          {prestonPics.map((image) => (
            <img
              key={image.id}
              src={image.img}
              alt={image.title}
              style={{
                height: "400px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />
          ))}
        </Carousel>
      </div>
      <div style={{ width: "75%" }}>
        <p>
          I'm Preston Polston, originally from Denison, Texas. My journey in web
          development began when I decided to dive into a Fullstack Academy Web
          Development Bootcamp, solidifying my skills and knowledge in HTML,
          CSS, JavaScript, React.js, Redux.js, Node.js, npm, MySQL, PostgreSQL,
          GitHub, Bootstrap, MUI, and Jest.
        </p>
        <p>
          Before my pivot to web development, I held positions as a Rigging
          Foreman at Entertainment Partners, managing electrical and lighting
          rigging on film sets and locations, and a Steel Yard Manager at Metal
          Warehouse, overseeing operations and customer service initiatives,
          ensuring timely delivery of high-quality products.
        </p>
        <p>
          With a background in the US Air Force as an F-16 Dedicated Crew Chief,
          I gained valuable leadership skills and experience in managing teams
          and executing operations. Merging my unique experiences, I now apply
          my strong problem-solving abilities and leadership skills to excel in
          the tech industry, aiming to create impactful web projects by
          mastering both front-end and back-end technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
