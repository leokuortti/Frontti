import { useState } from "react";

function AddCourseView({ setView, courses, setCourses }) {
  const [coursename, setCoursename] = useState("");

  return (
    <div>
      <h2>Add course</h2>

      <input
        type="text"
        value={coursename}
        onChange={(e) => setCoursename(e.target.value)}
      />

      <button
        onClick={() => {
          if (coursename !== "") {
            setCourses([...courses, coursename]);
            setCoursename("");
          }
        }}
      >
        Save
      </button>

      <br />
      <br />

      <button onClick={() => setView("main")}>Back</button>

      <h3>Kurssit</h3>
      <ul>
        {courses.map((c, index) => {
          return <li key={index}>{c}</li>;
        })}
      </ul>
    </div>
  );
}

export default AddCourseView;
