import React, { useState, useEffect } from "react";
import Advertisement from "../components/Advertisement";
import Memo from "../components/Memo";
import Guest from "../components/Guest";
import GuestFilter from "../components/GuestFilter";
import "../styles/Home.css";
import { AppType } from "../App";
import { useAppSelector, useAppDispatch } from "../reduxstore/hooks";
import { getUsers, getImgs } from "../reduxstore/slices/userSlice";
export interface HomeType {
  dateState: string;
  setDateState: React.Dispatch<React.SetStateAction<string>>;
  handleChangeDate: (e: React.FormEvent<HTMLInputElement>) => void;
}
function Home({ setTitleNumber }: AppType) {
  const [dateState, setDateState] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleChangeDate = (e: React.FormEvent<HTMLInputElement>) => {
    setDateState(e.currentTarget.value);
  };

  useEffect(() => {
    setTitleNumber(0);
    if (dateState != "") {
      let stateDate = dateState.split("-").join("");
      void dispatch(getUsers(stateDate));
    }
    void dispatch(getImgs());
  }, [dateState]);
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
        <Guest
          dateState={dateState}
          setDateState={setDateState}
          handleChangeDate={handleChangeDate}
        />
      </div>
      <div className="HomeContents">
        <GuestFilter />
      </div>
    </div>
  );
}

export default Home;
