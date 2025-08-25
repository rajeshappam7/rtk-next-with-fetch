"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../reduxToolkit/slice";
import Link from "next/link";

export default function AddEmployees() {
  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch();
  const handleDispatch = () => {
    console.log("Rajesh");
    dispatch(addEmployee(empName));
    setEmpName("");
  };
  return (
    <div>
      <h1>Add Employee</h1>
      <input
        type="text"
        placeholder="Add an Emp"
        onChange={(e) => setEmpName(e.target.value)}
        value={empName}
      />
      <button onClick={handleDispatch}>Add</button>
      <Link href={"/delete-employee"}>Delete Employee</Link>
    </div>
  );
}
