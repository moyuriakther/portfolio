import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";
import Particle from "../components/Particle";
import admin from "../assets/Projects/admin.png";
import todo from "../assets/Projects/todo.png";
import shop from "../assets/Projects/shop.png";

function Projects() {
  const projects = [
    {
      id: 1,
      imgPath: shop,
      isBlog: false,
      title: "Shoe Shop",
      description:
        "Full-featured shopping cart with Product reviews and ratings, Instant search for the product. User profile with orders. Checkout process, stripe payment gateway integration is processing. ",
      ghLink: "https://github.com/moyuriakther/shop",
      demoLink: "https://vite-react-shop.web.app",
    },
    {
      id: 2,
      imgPath: admin,
      isBlog: false,
      title: "Shop Admin panel",
      description:
        "It’s an online e-commerce admin panel. Only the admin can login. admin can add a new product, update an already existing product and also delete an existing product. also, the admin can monitor order details like order is paid or not, the order is delivered or not.",
      ghLink: "https://github.com/moyuriakther/admin",
      demoLink: "https://vite-shop-admin.web.app",
    },
    {
      id: 3,
      imgPath: todo,
      isBlog: false,
      title: "Add ToDo",
      description:
        "Add Your Daily Tasks. and organize them from most to least importance.",
      ghLink: "https://github.com/moyuriakther/ToDo-List",
      demoLink: "https://todo-list-c857b.web.app",
    },
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          {` Here are a few projects I've worked on recently.`}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects?.map((project) => (
            // <Col md={4} className="project-card">
            <Project project={project} key={project.id} />
            // </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
