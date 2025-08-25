"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "../reduxToolkit/slice";

export default function ApiData() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.employeeData.isLoading);
  const error = useSelector((store) => store.employeeData.error);
  const empApiData = useSelector((store) => store.employeeData.empApiData);

  useEffect(() => {
    dispatch(apiData());
  }, []);

  return (
    <div>
      <h1>API DATA</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {empApiData?.map((each) => {
        return <p key={each.id}>{each.name}</p>;
      })}
    </div>
  );
}
