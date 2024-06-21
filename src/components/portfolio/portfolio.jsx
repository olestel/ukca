import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Grid } from "@mui/material";
//Scss
import "./portfolio.scss";
//Assets
import Preview from "../../assets/portfolio/preview.png";
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
      preview: Preview,
      title: "Project name",
    },
    {
      id: "2",
      preview: Preview,
      title: "Project name",
    },
    {
      id: "3",
      preview: Preview,
      title: "Project name",
    },
    {
      id: "4",
      preview: Preview,
      title: "Project name",
    },
    {
      id: "5",
      preview: Preview,
      title: "Project name",
    },
    {
      id: "6",
      preview: Preview,
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
              handleMoreImages={() => setIsModalOpen(true)}
            />
          ))}
        </Masonry>
        <Grid container className="flex-center padding40">
          <Button label="HAVE WORK FOR US?" target={"contact"} />
        </Grid>
      </div>
    </div>
  );
};

export default Portfolio;
