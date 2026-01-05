import { useState } from "react";

function ListNotesView({ setView, courses, notes, setNotes }) {
  const [filterCourse, setFilterCourse] = useState("all");

  let notesToShow = notes;

  if (filterCourse !== "all") {
    notesToShow = notes.filter((n) => n.course === filterCourse);
  }

  return (
    <div>
      <h2>List notes</h2>

      <p>Filter:</p>
      <select
        value={filterCourse}
        onChange={(e) => setFilterCourse(e.target.value)}
      >
        <option value="all">All</option>
        {courses.map((c, index) => {
          return (
            <option key={index} value={c}>
              {c}
            </option>
          );
        })}
      </select>

      <br />
      <br />

      {notesToShow.length === 0 && <p>Ei muistiinpanoja!</p>}

      {notesToShow.map((n) => {
        return (
          <div
            key={n.id}
            style={{ border: "1px solid gray", padding: 8, marginBottom: 10 }}
          >
            <p>
              <b>{n.text}</b>
            </p>
            <p>Course: {n.course}</p>
            <p>Time: {n.time}</p>

            <button
              onClick={() => {
                const newList = notes.filter((x) => x.id !== n.id);
                setNotes(newList);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <button onClick={() => setView("main")}>Back</button>
    </div>
  );
}

export default ListNotesView;
