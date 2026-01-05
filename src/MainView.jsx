export default function MainView({ setView, courses }) {
  const noCourses = courses.length === 0;

  return (
    <div>
      <h2>Main view</h2>

      <button
        onClick={() => setView("addNote")}
        disabled={noCourses}
      >
        Create notes for class
      </button>

      {noCourses && <p>Lisää ensin vähintään yksi kurssi.</p>}

      <br />
      <br />

      <button onClick={() => setView("listNotes")}>List notes</button>
      <br />
      <br />

      <button onClick={() => setView("addCourse")}>Add courses</button>
    </div>
  );
}
