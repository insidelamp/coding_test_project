import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppType } from "../App";
import "../styles/Detail.css";
import { useAppSelector } from "../reduxstore/hooks";
import { calculateAge } from "../until";
import { revDateFunc } from "../until";

function Detail({ setTitleNumber }: AppType) {
  const getUserdata = useAppSelector((state) => state.users?.users?.users);
  const { id } = useParams();

  const filterUser = getUserdata?.filter((item) => item.userid == Number(id));
  useEffect(() => {
    setTitleNumber(1);
  }, []);

  return (
    <div className="DetailWrapper">
      {filterUser?.map((items) => (
        <div key={items.userid} className="DetailSpace">
          <div className="DetailDate">{revDateFunc(items?.RevDate)}</div>
          <div className="DetailContent">
            <div>이름&nbsp;:</div>
            <div>{items?.name}</div>
          </div>
          <div className="DetailContent">
            <div>성별&nbsp;:</div>
            <div> {calculateAge(items?.patDob, "성별")}</div>
          </div>
          <div className="DetailContent">
            <div>나이&nbsp;:</div>
            <div>{calculateAge(items?.patDob, "나이")}</div>
          </div>
          <div className="DetailContent">
            <div>주민번호&nbsp;:</div>
            <div>{items?.patDob}</div>
          </div>
          <div className="DetailContent">
            <div>전화번호&nbsp;:</div>
            <div>{items?.phone}</div>
          </div>
          <div className="DetailContent">
            <div>메모&nbsp;:</div>
            <div>{items?.memo}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
