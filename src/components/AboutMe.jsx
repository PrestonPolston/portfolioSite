import Carousel from "react-material-ui-carousel";

const prestonPics = [
  {
    label: "End of Runway Inspection",
    imgPath: "/endOfRunway.jpeg",
  },
  {
    label: "Incentive Flight",
    imgPath: "/incentiveFlight.jpeg",
  },
  {
    label: "My Jet",
    imgPath: "/jet.jpeg",
  },
  {
    label: "Reventment",
    imgPath: "/reventments.jpeg",
  },
  {
    label: "Squadron Deployment Picture",
    imgPath: "/squadronPic.jpeg",
  },
  {
    label: "Maintenance Crew Picture",
    imgPath: "/maintPic.jpeg",
  },
];

const AboutMe = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>About Preston</h2>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Carousel>
          {prestonPics.map((image) => (
            <img
              key={image.id}
              src={image.imgPath}
              alt={image.label}
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
      <p>
        I'm Preston Polston, originally from Denison, Texas. My journey in web
        development began when I decided to dive into a Fullstack Academy Web
        Development Bootcamp, solidifying my skills and knowledge in HTML, CSS,
        JavaScript, React.js, Redux.js, Node.js, npm, MySQL, PostgreSQL, GitHub,
        Bootstrap, MUI, and Jest.
      </p>
      <p>
        Before my pivot to web development, I held positions as a Rigging
        Foreman at Entertainment Partners, managing electrical and lighting
        rigging on film sets and locations, and a Steel Yard Manager at Metal
        Warehouse, overseeing operations and customer service initiatives,
        ensuring timely delivery of high-quality products.
      </p>
      <p>
        With a background in the US Air Force as an F-16 Dedicated Crew Chief, I
        gained valuable leadership skills and experience in managing teams and
        executing operations. Merging my unique experiences, I now apply my
        strong problem-solving abilities and leadership skills to excel in the
        tech industry, aiming to create impactful web projects by mastering both
        front-end and back-end technologies.
      </p>
    </div>
  );
};

export default AboutMe;
