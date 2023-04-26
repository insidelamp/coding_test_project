import React, { useEffect } from "react";
import Advertisement from "../components/Advertisement";
import Memo from "../components/Memo";
import Guest from "../components/Guest";
import GuestFilter from "../components/GuestFilter";
import "../styles/Home.css";
import { AppType } from "../App";

function Home({ setTitleNumber }: AppType) {
  useEffect(() => {
    setTitleNumber(0);
  }, []);
  return (
    <div className="HomeWrapper">
      <div className="HomeContents">
        <div className="ContentsWrapper">
          <h2>광고</h2>
          <Advertisement />
        </div>
        <div className="ContentsWrapper2">
          <h2>메모란</h2>
          <Memo />
        </div>
      </div>
      <div className="HomeContents">
        <Guest />
      </div>
      <div className="HomeContents">
        <GuestFilter />
      </div>
    </div>
  );
}

export default Home;
