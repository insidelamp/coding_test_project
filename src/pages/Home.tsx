import React, { useState, useEffect } from "react";
import Advertisement from "../components/home/Advertisement";
import Memo from "../components/home/Memo";
import Guest from "../components/home/Guest";
import GuestFilter from "../components/home/GuestFilter";
import "../styles/Home.css";
import { AppType } from "../App";
import { useAppSelector, useAppDispatch } from "../reduxstore/hooks";
import { getUsers, getImgs } from "../reduxstore/slices/userSlice";
import { DataType } from "../reduxstore/slices/userSlice";

export interface HomeType {
  dateState?: string;
  setDateState?: React.Dispatch<React.SetStateAction<string>>;
  handleChangeDate?: (e: React.FormEvent<HTMLInputElement>) => void;
  filterSame?: DataType[];
  setFilterSame: React.Dispatch<React.SetStateAction<DataType[]>>;
}

function Home({ setTitleNumber }: AppType) {
  const [dateState, setDateState] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleChangeDate = (e: React.FormEvent<HTMLInputElement>) => {
    setDateState(e.currentTarget.value);
  };
  const [filterSame, setFilterSame] = useState<DataType[]>([]);

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
          filterSame={filterSame}
          setFilterSame={setFilterSame}
        />
      </div>
      <div className="HomeContents">
        <GuestFilter filterSame={filterSame} setFilterSame={setFilterSame} />
      </div>
    </div>
  );
}

export default Home;
