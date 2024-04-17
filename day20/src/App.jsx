import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { createContext, useReducer, useRef } from "react";

const mokData = [
  {
    id: 1,
    createdDate: new Date("2024-04-16").getTime(),
    emotionId: 1,
    copntent: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-04-15").getTime(),
    emotionId: 2,
    copntent: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-03-14").getTime(),
    emotionId: 3,
    copntent: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return [...state];
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 패ㅔ이지
// 2. "/new" : 새로운 일기를 작성하는 new 페이지
// 3. 'diray': 일기를 상세히 조회하는 diary 페이지
function App() {
  const [data, dispatch] = useReducer(reducer, mokData);

  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, createDate, emotionId, content },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createDate, emotionId, content },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
