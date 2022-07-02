import "./App.css";
import { useEffect, useState } from "react";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./components/Note/Note";

const App = () => {
  const [notesList, setNotesList] = useState<Array<any>>([]);

  useEffect(() => setNotesList(DUMMY_NOTES), []);

  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, id) => {
          return <Note note={noteItem} key={id} />;
        })}
      </div>
    </div>
  );
};

export default App;
