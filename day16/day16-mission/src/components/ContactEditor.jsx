import { useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onAdd }) {
  const initData = { name: "", contact: "" };

  const [editorData, setEditorData] = useState(initData);

  const onChangeEditorData = (e) => {
    const name = e.target.name;
    setEditorData({
      ...editorData,
      [name]: e.target.value,
    });
  };

  const onClickAdd = () => {
    if (editorData.name === "" || editorData.contact === "") {
      alert("이름과 연락처(이메일) 모두 입력해 주세요.");
      return;
    }
    onAdd(editorData);
    setEditorData(initData);
  };
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          name="name"
          placeholder="이름 ..."
          value={editorData.name}
          onChange={onChangeEditorData}
        />
        <input
          className="contact"
          name="contact"
          placeholder="연락처(이메일) ..."
          value={editorData.contact}
          onChange={onChangeEditorData}
        />
      </div>
      <button onClick={onClickAdd}>Add</button>
    </div>
  );
}
