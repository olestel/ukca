import React from "react";
import Masonry from "react-masonry-css";
import "./modal.scss";

import Backdrop from "../contact-modal/ModalBackdrop";

//Assets
import Preview1 from "../../assets/portfolio/1.JPG";
import Preview2 from "../../assets/portfolio/2.JPG";
import Preview3 from "../../assets/portfolio/3.JPG";
import Preview4 from "../../assets/portfolio/4.JPG";
import Preview5 from "../../assets/portfolio/5.JPG";
import Preview6 from "../../assets/portfolio/6.JPG";
import Preview7 from "../../assets/portfolio/7.JPG";
import Preview8 from "../../assets/portfolio/8.JPG";
import Preview9 from "../../assets/portfolio/9.JPG";
import Preview10 from "../../assets/portfolio/10.JPG";
import Preview11 from "../../assets/portfolio/11.JPG";
import Preview12 from "../../assets/portfolio/12.JPG";
import Preview13 from "../../assets/portfolio/13.JPG";
import Preview14 from "../../assets/portfolio/14.JPG";
import Preview15 from "../../assets/portfolio/15.JPG";
import Preview16 from "../../assets/portfolio/16.JPG";
import Preview17 from "../../assets/portfolio/17.JPG";
import Preview18 from "../../assets/portfolio/18.JPG";
import Preview19 from "../../assets/portfolio/19.JPG";
import Preview20 from "../../assets/portfolio/20.JPG";
import Preview21 from "../../assets/portfolio/21.jpg";
import Preview22 from "../../assets/portfolio/22.jpg";
import Preview23 from "../../assets/portfolio/23.jpg";
import Preview24 from "../../assets/portfolio/24.jpg";
import Preview25 from "../../assets/portfolio/25.jpg";
import Preview26 from "../../assets/portfolio/26.jpg";
import Preview27 from "../../assets/portfolio/27.jpg";
import Preview28 from "../../assets/portfolio/28.jpg";
import Preview29 from "../../assets/portfolio/29.jpg";
import Preview30 from "../../assets/portfolio/30.jpg";
import Preview32 from "../../assets/portfolio/32.JPG";

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
          <p>Our Projects:</p>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="projects my-masonry-grid"
            columnClassName="mint__gallery"
          >
            <img src={Preview1} alt="project" />
            <img src={Preview2} alt="project" />
            <img src={Preview3} alt="project" />
            <img src={Preview4} alt="project" />
            <img src={Preview5} alt="project" />
            <img src={Preview6} alt="project" />
            <img src={Preview7} alt="project" />
            <img src={Preview8} alt="project" />
            <img src={Preview9} alt="project" />
            <img src={Preview10} alt="project" />
            <img src={Preview11} alt="project" />
            <img src={Preview12} alt="project" />
            <img src={Preview13} alt="project" />
            <img src={Preview14} alt="project" />
            <img src={Preview15} alt="project" />
            <img src={Preview16} alt="project" />
            <img src={Preview17} alt="project" />
            <img src={Preview18} alt="project" />
            <img src={Preview19} alt="project" />
            <img src={Preview20} alt="project" />
            <img src={Preview21} alt="project" />
            <img src={Preview22} alt="project" />
            <img src={Preview23} alt="project" />
            <img src={Preview24} alt="project" />
            <img src={Preview25} alt="project" />
            <img src={Preview26} alt="project" />
            <img src={Preview27} alt="project" />
            <img src={Preview28} alt="project" />
            <img src={Preview29} alt="project" />
            <img src={Preview30} alt="project" />
            <img src={Preview32} alt="project" />
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
