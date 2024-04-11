import { useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      break;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onAdd = (editorData) => {
    console.log(editorData);
    dispatch({ type: "ADD", data: { id: idRef.current++, ...editorData } });
  };
  const onRemove = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onAdd={onAdd} />
      </section>
      <section>
        <ContactList todos={todos} onRemove={onRemove} />
      </section>
    </div>
  );
}

export default App;
