import { useState } from "react";

function AddNoteView({
  setView,
  courses,
  selectedCourse,
  setSelectedCourse,
  lockedCourse,
  setLockedCourse,
  sessionNotes,
  setSessionNotes,
  notes,
  setNotes,
}) {
  const [noteText, setNoteText] = useState("");
  const courseInUse = lockedCourse !== "" ? lockedCourse : selectedCourse;

  return (
    <div>
      <h2>Create notes</h2>

      <p>Kurssi:</p>

      <select
        value={courseInUse}
        disabled={lockedCourse !== ""}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        {courses.map((c, index) => {
          return (
            <option key={index} value={c}>
              {c}
            </option>
          );
        })}
      </select>

      {lockedCourse !== "" && <p>Session kurssi lukittu: {lockedCourse}</p>}

      <br />
      <br />

      <textarea
        rows="4"
        cols="40"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />

      <br />

      <button
        onClick={() => {
          if (noteText !== "") {
            if (lockedCourse === "") {
              setLockedCourse(selectedCourse);
            }

            const usedCourse = lockedCourse === "" ? selectedCourse : lockedCourse;

            const newNote = {
              id: notes.length + 1,
              course: usedCourse,
              text: noteText,
              time: new Date().toLocaleString(),
            };

            setNotes([...notes, newNote]);

            setSessionNotes([...sessionNotes, noteText]);
            setNoteText("");
          }
        }}
      >
        Save note
      </button>

      <button
        onClick={() => {
          setLockedCourse("");
          setSessionNotes([]);
        }}
        style={{ marginLeft: 10 }}
      >
        New session
      </button>

      <br />
      <br />

      <h3>Session notes</h3>
      

      <ul>
        {sessionNotes.map((n, index) => {
          return <li key={index}>{n}</li>;
        })}
      </ul>

      <button onClick={() => setView("main")}>Back</button>
    </div>
  );
}

export default AddNoteView;
