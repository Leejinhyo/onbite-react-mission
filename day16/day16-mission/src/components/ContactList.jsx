import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ todos, onRemove }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {todos.map((item) => (
        <ContactItem key={item.id} onRemove={onRemove} {...item} />
      ))}
    </div>
  );
}
