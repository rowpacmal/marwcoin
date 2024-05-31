import React from "react";
import { Link } from "react-router-dom";
import NotFoundCSS from "../assets/styles/404.module.css";
import one404 from "../assets/one404.png";
import two404 from "../assets/two404.png";
import three404 from "../assets/three404.png";
import four404 from "../assets/four404.png";
import MW from "../assets/Logo3.png";

export const NotFound = () => {
  return (
    <div className={NotFoundCSS.wrapper}>
      <div className={NotFoundCSS.topBanner}>
        <Link
        to={"/"}>
          <img src={one404} alt="notFound" />
        </Link>
        <img src={two404} alt="notFound" />
      </div>
      <div className={NotFoundCSS.vid_con}>
        <video
          width={"100%"}
          className={NotFoundCSS.birds}
          autoPlay
          loop
          muted
          src="https://www.waza.org/wp-content/uploads/2019/02/404-flamingos.mp4"
          height={"90%"}
        ></video>
      </div>
      <div className={NotFoundCSS.bottomBanner}>
        <img src={three404} alt="notFound" />
        <img src={four404} alt="notFound" />
        <Link
        className={NotFoundCSS.MW}
        to={"/"}
        >
          <img src={MW} alt="MW" />
          <h5 className={NotFoundCSS.goBack}>Lets go home</h5>
        </Link>
      </div>
    </div>
  );
};