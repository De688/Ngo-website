import React, { useState } from "react";
import "./HeaderBottom.css";
import Post from "../../pages/pages";
import Categories from "../../pages/Categories";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

function HeaderBottom() {
  const [isShow, setisShow] = useState(true);
  const [isShow2, setisShow2] = useState(false);
  const [isId, setisId] = useState("");
  const [linkData, setlinkData] = useState([]);

  const handleMouseEnter = () => {
    setisShow(true);
  };
  const handleMouseLeave = () => {
    setisId();
    setisShow(false);
  };
  const onMouseEnter = () => {
    setisShow2(true);
  };
  const onMouseLeave = () => {
    setisId();
    setisShow2(false);
  };

  return (
    <section className="main-HeaderBottom">
      <div className="pages">
        <div className="maindropdown">
          <div
            className="pages-map"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Who We Are
            <span>
              <MdOutlineExpandMore className={isShow ? "more2" : "more"} />
            </span>
          </div>
          {isShow ? (
            <div
              className="hover-link"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {Post.map((page, i) => {
                const { name, dlink } = page;
                return (
                  <div className="hover-link-show" key={i}>
                    <Link to={dlink} className="over-links-li">
                      {name}
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="maindropdown">
          <div
            className="pages-map"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            What We Do
            <span>
              <MdOutlineExpandMore className={isShow2 ? "more3" : "more"} />
            </span>
          </div>
          {isShow2 ? (
            <div
              className="hover-link"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {Categories.map((page, i) => {
                const { name, dlink } = page;
                return (
                  <div className="hover-link-show" key={i}>
                    <Link to={dlink} className="over-links-li">
                      {name}
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <button type="button" className="contact-button">
        Contact
      </button>
    </section>
  );
}

export default HeaderBottom;
