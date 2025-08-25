"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeEmployee } from "../reduxToolkit/slice";

export default function DeleteEmployee() {
  const data = useSelector((val) => val.employeeData.employees);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Delete Employee</h1>
      <ul>
        {data.map((each) => {
          return (
            <li key={each.id}>
              <span>{each.name}</span>
              <button onClick={() => dispatch(removeEmployee(each.id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
