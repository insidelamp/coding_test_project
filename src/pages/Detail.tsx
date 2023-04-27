import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppType } from "../App";
import "../styles/Detail.css";
import { useAppSelector } from "../reduxstore/hooks";
import { calculateAge } from "../until";

function Detail({ setTitleNumber }: AppType) {
  const getUserdata = useAppSelector((state) => state.users?.users?.users);
  const { id } = useParams();

  const filterUser = getUserdata?.filter((item) => item.userid == Number(id));
  useEffect(() => {
    setTitleNumber(1);
  }, []);
  const revDateFunc = (RevDate: string) => {
    let answer = "";
    let year = RevDate.split("").slice(0, 4).join("");
    let month = RevDate.split("").slice(5, 6).join("");
    let day = RevDate.split("").slice(6).join("");
    console.log(year + "년" + month + "월" + day + "일");
    answer = year + " 년 " + month + " 월 " + day + " 일 ";
    return answer;
  };
  return (
    <div className="DetailWrapper">
      {filterUser?.map((items) => (
        <div key={items.userid}>
          <div>{revDateFunc(items?.RevDate)}</div>
          <div>이름{items?.name}</div>
          <div>성별 {calculateAge(items?.patDob, "성별")}</div>
          <div>나이{calculateAge(items?.patDob, "나이")}</div>
          <div>주민번호 {items?.patDob}</div>
          <div>전화번호 {items?.phone}</div>
          <div>메모 {items?.memo}</div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
