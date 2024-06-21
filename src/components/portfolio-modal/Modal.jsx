import React from "react";
import Masonry from "react-masonry-css";
import "./modal.scss";

import Backdrop from "../contact-modal/ModalBackdrop";

//Assets
import Preview from "../../assets/portfolio/preview.png";

const projectModal = (props) => {
  // PORTFOLIO GALLERY BREAKPOINTS
  const portfolioBreakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="modal">
      <Backdrop closeModal={props.closeModal} />
      <div className="react-reveal">
        <div className="sucess__modal">
          <p>Project Name:</p>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="projects my-masonry-grid"
            columnClassName="mint__gallery"
          >
            {[...Array(12)].map((_) => (
              <img src={Preview} alt="project" />
            ))}
          </Masonry>
          <div
            role="button"
            tabIndex={0}
            className="modal__btn flex-center"
            onClick={props.closeModal}
            onKeyDown={props.closeModal}
          >
            <p>Close</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectModal;
