"use client";

import { useDispatch, useSelector } from "react-redux";
import { apiData, removeEmployee } from "../reduxToolkit/slice";
import { useEffect } from "react";

export default function ShowEmployees() {
  const dispatch = useDispatch();
  const employees = useSelector((store) => store.employeeData.employees);
  const empApiData = useSelector((store) => store.employeeData.empApiData);

  const handleRemove = (e) => {
    dispatch(removeEmployee(e));
  };

  useEffect(() => {
    dispatch(apiData());
  }, []);

  return (
    <div>
      <h1>SHow Employee</h1>
      {employees.map((each, i) => {
        return (
          <div key={each.id}>
            <li>{each.name}</li>
            <button onClick={() => handleRemove(each.id)}>Delete</button>
          </div>
        );
      })}
      <h2>THis is API DAta</h2>
      <div>{JSON.stringify(empApiData)}</div>
    </div>
  );
}
