import React, { useEffect } from "react";
import { AppType } from "../App";
import "../styles/Detail.css";

function Detail({ setTitleNumber }: AppType) {
  useEffect(() => {
    setTitleNumber(1);
  }, []);
  return <div className="DetailWrapper"></div>;
}

export default Detail;
