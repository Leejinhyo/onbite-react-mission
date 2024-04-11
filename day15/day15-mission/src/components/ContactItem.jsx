import "./ContactItem.css";

export default function ContactItem({ id, name, contact, onRemove }) {
  const onClickRemove = () => {
    onRemove(id);
  };
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickRemove}>🗑️ Remove</button>

      {/* <div className="name">이정환</div>
      <div className="contact">king199777@gmail.com</div>
      <button onClick={onRemove}>🗑️ Remove</button> */}
    </div>
  );
}
