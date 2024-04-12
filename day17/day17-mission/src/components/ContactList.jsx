import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext } from "../App";

export default function ContactList() {
  const todos = useContext(ContactStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {todos.map((item) => (
        <ContactItem key={item.id} {...item} />
      ))}
    </div>
  );
}
