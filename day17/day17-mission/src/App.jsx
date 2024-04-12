import { useCallback, useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { createContext } from "react";
import { useMemo } from "react";

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

export const ContactStateContext = createContext(); // State 관리 context
export const ContactDisaptchContext = createContext(); // Add, Remove 함수 관리 context

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  /*
  const onAdd = (editorData) => {
    console.log(editorData);
    dispatch({ type: "ADD", data: { id: idRef.current++, ...editorData } });
  };
  const onRemove = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };
  */
  const onAdd = useCallback((editorData) => {
    console.log(editorData);
    dispatch({ type: "ADD", data: { id: idRef.current++, ...editorData } });
  }, []);
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  const memoizedDispatch = useMemo(() => ({ onAdd, onRemove }), []);

  return (
    <div className="App">
      <ContactStateContext.Provider value={todos}>
        <ContactDisaptchContext.Provider value={memoizedDispatch}>
          <h2>Contact List</h2>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDisaptchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
