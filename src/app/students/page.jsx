"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../reduxToolkit/slicetwo";

export default function RegisterStudent() {
  const [stuName, setStuName] = useState("");
  const dispatch = useDispatch();
  const studData = useSelector((val) => val.studentData.students);
  return (
    <div>
      <h1>Students</h1>
      <input
        value={stuName}
        type="text"
        onChange={(e) => setStuName(e.target.value)}
        placeholder="Regsiter student"
      />
      <br />
      <button type="button" onClick={() => dispatch(addStudent(stuName))}>
        Register
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Show Sudents</h2>
      <ul>
        {studData.map((each) => {
          return <li key={each.id}>{each.name}</li>;
        })}
      </ul>
    </div>
  );
}
