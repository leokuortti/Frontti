import { useState } from "react";
import "./App.css";

import MainView from "./MainView";
import AddCourseView from "./AddCourseView";
import AddNoteView from "./AddNoteView";
import ListNotesView from "./ListNotesView";

function App() {
  const [view, setView] = useState("main");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [lockedCourse, setLockedCourse] = useState("");
  const [sessionNotes, setSessionNotes] = useState([]);
  const [notes, setNotes] = useState([]);

  let content = null;

  if (view === "main") {
    content = <MainView setView={setView} courses={courses} />;
  }

  if (view === "addCourse") {
    content = (
      <AddCourseView setView={setView} courses={courses} setCourses={setCourses} />
    );
  }

  if (view === "addNote") {
    content = (
      <AddNoteView
        setView={setView}
        courses={courses}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        lockedCourse={lockedCourse}
        setLockedCourse={setLockedCourse}
        sessionNotes={sessionNotes}
        setSessionNotes={setSessionNotes}
        notes={notes}
        setNotes={setNotes}
      />
    );
  }

  if (view === "listNotes") {
    content = (
      <ListNotesView
        setView={setView}
        courses={courses}
        notes={notes}
        setNotes={setNotes}
      />
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>Notes app</h1>
      {content}
    </div>
  );
}

export default App;
