import { useNavigate } from "react-router-dom";
import "../../styles/Guest.css";
import { useAppSelector } from "../../reduxstore/hooks";
import { calculateAge } from "../../until";
import { HomeType } from "../../pages/Home";
import { useEffect } from "react";
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

function Guest({
  dateState,
  handleChangeDate,
  filterSame,
  setFilterSame,
}: HomeType) {
  const navigate = useNavigate();
  const getUserdata = useAppSelector((state) => state.users?.users?.users);
  const notFilter = getUserdata?.filter(
    (items) => filterSame?.includes(items) == false
  );
  const moveDetailFunc = (id: number) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    if (getUserdata) {
      setFilterSame(getUserdata);
    }
  }, [getUserdata]);
  return (
    <div className="GuestWrapper">
      <div className="GuestHeader">
        <div className="GuestPersons">
          손님 {getUserdata ? getUserdata?.length : 0}명
        </div>
        <input type="date" value={dateState} onChange={handleChangeDate} />
      </div>
      <>
        {filterSame && notFilter ? (
          <>
            {filterSame.map((item) => (
              <div
                key={item?.userid}
                className="GuestContentsSpace GuestContentsSpaceB"
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
            {notFilter.map((items) => (
              <div
                key={items?.userid}
                className="GuestContentsSpace"
                onClick={() => moveDetailFunc(items.userid)}
              >
                <div className="GuestInformation">
                  <div>{items?.name}</div>
                  <div>|&nbsp;&nbsp;{calculateAge(items?.patDob, "전체")}</div>
                  <div>|&nbsp;&nbsp;{items?.patDob} </div>
                  <div>|&nbsp;&nbsp;{items?.phone}</div>
                </div>
                <div className="GuestContent">{items?.memo}</div>
              </div>
            ))}
          </>
        ) : (
          <>
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
          </>
        )}
      </>
      {/* {getUserdata?.map((item) => (
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
      ))} */}
    </div>
  );
}

export default Guest;
