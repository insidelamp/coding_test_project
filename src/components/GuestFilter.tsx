import React, { useState, useEffect } from "react";
import { useAppSelector } from "../reduxstore/hooks";
import { FaSearch } from "react-icons/fa";
import { DataType } from "../reduxstore/slices/userSlice";
import { calculateAge } from "../until";
import { revDateFunc } from "../until";
import "../styles/GuestFilter.css";
import { HomeType } from "../pages/Home";

function GuestFilter({ setFilterSame }: HomeType) {
  const [optionValue, setOptionValue] = useState<string>("");
  const getUserdata = useAppSelector((state) => state.users?.users?.users);
  const [filterData, setFilterData] = useState<DataType[]>([]);
  const OPTIONS = [
    { value: "name", name: "이름" },
    { value: "phone", name: "전화번호" },
    { value: "birthdate", name: "생년월일" },
  ];

  const checkValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (optionValue == "") {
      setOptionValue("name");
    } else {
      setOptionValue(e.target.value);
    }
  };

  const searchFunc = (e: React.FormEvent<HTMLInputElement>) => {
    if (getUserdata) {
      if (optionValue === "name") {
        setFilterData(
          getUserdata.filter((item) =>
            item.name.includes(e.currentTarget.value)
          )
        );
      } else if (optionValue === "birthdate") {
        setFilterData(
          getUserdata.filter((item) =>
            item.patDob.includes(e.currentTarget.value)
          )
        );
      } else if (optionValue === "phone") {
        setFilterData(
          getUserdata.filter((item) =>
            item.phone.includes(e.currentTarget.value)
          )
        );
      }
    }
  };

  useEffect(() => {
    if (optionValue == "") {
      setOptionValue("name");
    }
    if (filterData) {
      setFilterSame(filterData);
    }
  }, [filterData]);

  return (
    <div className="GuestFilterWrapper">
      <div className="GuestFilterTitle">손님 검색 필터</div>
      <div className="GuestFilterSelectSpace">
        <select className="GuestFilterSelectBox" onChange={checkValue}>
          {OPTIONS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <div className="GuestFilterInputSpace">
          <div className="GuestFilterIcon">
            <FaSearch />
          </div>
          <input className="GuestFilterInput" onChange={searchFunc} />
        </div>
      </div>
      {filterData?.map((filterItems) => (
        <div
          key={filterItems.userid}
          className={
            filterData != undefined
              ? "FilterUserSpace FilterUserSpaceTrue"
              : "FilterUserSpace"
          }
        >
          <div className="FilterUserFlex">
            <div className="FiterUserInformationSpace">
              <div>{revDateFunc(filterItems?.RevDate)}</div>
              <div>|&nbsp;&nbsp;{filterItems?.name}&nbsp;&nbsp;</div>
              <div>
                |&nbsp;&nbsp;
                {calculateAge(filterItems?.patDob, "성별")}
              </div>
              <div>
                |&nbsp;&nbsp;
                {calculateAge(filterItems?.patDob, "나이")}
              </div>
              <div>|&nbsp;&nbsp; {filterItems?.patDob}</div>
            </div>
            <div className="FilterUserContent">
              전화번호 {filterItems?.phone}
            </div>
            <div className="FilterUserContent">메모 {filterItems?.memo}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestFilter;
