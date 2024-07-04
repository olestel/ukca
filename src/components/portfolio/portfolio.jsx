import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Grid } from "@mui/material";
//Scss
import "./portfolio.scss";
//Assets
import Preview6 from "../../assets/portfolio/6.JPG";
import Preview10 from "../../assets/portfolio/10.JPG";
import Preview13 from "../../assets/portfolio/13.JPG";
import Preview21 from "../../assets/portfolio/21.jpg";
import Preview26 from "../../assets/portfolio/26.jpg";
import Preview29 from "../../assets/portfolio/29.jpg";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import ProjectModal from "./../portfolio-modal/Modal";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openProject, setOpenProject] = useState();
  const projects = [
    {
      id: "1",
      preview: Preview6,
      title: "Project name",
    },
    {
      id: "2",
      preview: Preview10,
      title: "Project name",
    },
    {
      id: "3",
      preview: Preview13,
      title: "Project name",
    },
    {
      id: "4",
      preview: Preview21,
      title: "Project name",
    },
    {
      id: "5",
      preview: Preview26,
      title: "Project name",
    },
    {
      id: "6",
      preview: Preview29,
      title: "Project name",
    },
  ];

  // PORTFOLIO GALLERY BREAKPOINTS
  const portfolioBreakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setOpenProject();
  };

  return (
    <div id="portfolio">
      {isModalOpen && (
        <ProjectModal closeModal={closeModal} openProject={openProject} />
      )}
      <div className="wrapper">
        <Title title="OUR PROJECTS" />
        <Masonry
          breakpointCols={portfolioBreakpoints}
          className="my-masonry-grid"
          columnClassName="mint__gallery"
        >
          {projects.map((project) => (
            <ProjectBox
              preview={project.preview}
              key={project.id}
              title={project.title}
              tag={project.tag}
            />
          ))}
        </Masonry>
        <Grid container className="flex-center padding40 project-btn-container">
          <div className="small__button">
            <button
              aria-label="send message"
              value="More projects photo"
              onClick={() => setIsModalOpen(true)}
            >
              More projects photo
            </button>
          </div>
          <Button label="HAVE WORK FOR US?" target={"contact"} />
        </Grid>
      </div>
    </div>
  );
};

export default Portfolio;
