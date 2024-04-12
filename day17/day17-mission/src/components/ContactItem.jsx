import { memo } from "react";
import "./ContactItem.css";
import { useContext } from "react";
import { ContactDisaptchContext } from "../App";

function ContactItem({ id, name, contact }) {
  const { onRemove } = useContext(ContactDisaptchContext);
  const onClickRemove = () => {
    onRemove(id);
  };
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickRemove}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
