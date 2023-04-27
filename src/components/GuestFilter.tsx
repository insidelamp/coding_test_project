import React from "react";
import { useAppSelector } from "../reduxstore/hooks";
function GuestFilter() {
  const getUserdata = useAppSelector((state) => state.users?.users?.users);
  console.log(getUserdata);
  return <div>GuestFilter</div>;
}

export default GuestFilter;
