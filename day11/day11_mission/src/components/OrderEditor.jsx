import { useState } from "react";

const OrderEditor = () => {
  const [input, setInput] = useState({
    menu: "",
    address: "",
    request: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    setInput({
      ...input,
      [name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.address === "") {
      alert("주소를 입력해주세요.");
      return;
    } else if (input.request === "") {
      alert("배달 요청사항을 입력해주세요.");
      return;
    }
    alert(
      `주문이 완료되었습니다.\n메뉴: ${input.menu}, 주소: ${input.address}, 요청사항: ${input.request}`
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          name="menu"
          style={{ width: 300, padding: 5 }}
          onChange={onChange}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          name="address"
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          onChange={onChange}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          name="request"
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
