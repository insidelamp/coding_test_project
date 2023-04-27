import React, { useState, useEffect } from "react";
import { useAppSelector } from "../reduxstore/hooks";
import { FaSearch } from "react-icons/fa";
import { DataType } from "../reduxstore/slices/userSlice";
import { calculateAge } from "../until";
import { revDateFunc } from "../until";

interface OptionType {
  value: string;
  name: string;
}

function GuestFilter() {
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
  console.log(optionValue);

  const searchFunc = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
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
    console.log(e.currentTarget.value);
  };
  useEffect(() => {
    if (optionValue == "") {
      setOptionValue("name");
    }
  }, []);

  return (
    <div>
      <div>손님 검색 필터</div>
      <div>
        <select onChange={checkValue}>
          {OPTIONS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <div>
          <div>
            <FaSearch />
          </div>
          <input onChange={searchFunc} />
        </div>
      </div>
      <div>
        {filterData?.map((filterItems) => (
          <div key={filterItems.userid}>
            <div>{revDateFunc(filterItems?.RevDate)}</div>
            <div>이름{filterItems?.name}</div>
            <div>성별 {calculateAge(filterItems?.patDob, "성별")}</div>
            <div>나이{calculateAge(filterItems?.patDob, "나이")}</div>
            <div>주민번호 {filterItems?.patDob}</div>
            <div>전화번호 {filterItems?.phone}</div>
            <div>메모 {filterItems?.memo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestFilter;
