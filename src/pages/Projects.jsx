import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";
import Particle from "../components/Particle";
import leaf from "../assets/Projects/leaf.png";
// import emotion from "../assets/Projects/emotion.png";
// import editor from "../assets/Projects/codeEditor.png";
import chatify from "../assets/Projects/chatify.png";
// import suicide from "../assets/Projects/suicide.png";
import bitsOfCode from "../assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      id: 1,
      imgPath: chatify,
      isBlog: false,
      title: "Chatify",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/",
    },
    {
      id: 2,
      imgPath: bitsOfCode,
      isBlog: false,
      title: "Bits-0f-C0de",
      description:
        "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/",
    },
    {
      id: 3,
      imgPath: leaf,
      isBlog: false,
      title: "Plant AI",
      description:
        "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      ghLink: "https://github.com/soumyajit4419/Plant_AI",
      demoLink: "https://plant49-ai.herokuapp.com/",
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
