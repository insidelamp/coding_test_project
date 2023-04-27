import { useNavigate } from "react-router-dom";
import "../styles/Guest.css";
import { useAppSelector } from "../reduxstore/hooks";

import { calculateAge } from "../until";
import { HomeType } from "../pages/Home";
export interface DataType {
  RevDate: string;
  memo: string;
  name: string;
  patDob: string;
  phone: string;
  userid: number;
}

export interface StateType {
  [users: string]: DataType[];
}

function Guest({ dateState, setDateState, handleChangeDate }: HomeType) {
  const navigate = useNavigate();
  const getUserdata = useAppSelector((state) => state.users?.users?.users);

  const moveDetailFunc = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <div className="GuestWrapper">
      <div className="GuestHeader">
        <div className="GuestPersons">
          손님 {getUserdata ? getUserdata?.length : 0}명
        </div>
        <input type="date" value={dateState} onChange={handleChangeDate} />
      </div>
      {getUserdata?.map((item) => (
        <div
          key={item?.userid}
          className="GuestContentsSpace"
          onClick={() => moveDetailFunc(item.userid)}
        >
          <div className="GuestInformation">
            <div>{item?.name}</div>
            <div>|&nbsp;&nbsp;{calculateAge(item?.patDob, "전체")}</div>
            <div>|&nbsp;&nbsp;{item?.patDob} </div>
            <div>|&nbsp;&nbsp;{item?.phone}</div>
          </div>
          <div className="GuestContent">{item?.memo}</div>
        </div>
      ))}
    </div>
  );
}

export default Guest;
