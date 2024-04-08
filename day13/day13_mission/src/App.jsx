import { useState } from "react";
import "./App.css";

/* 환율 전역변수 1300원 */
const EXCHANGE_RATE = 1300;

/**
 * 환율 입력 컴포넌트(krw, usd)
 * @param {string} label        라벨
 * @param {number} value        값
 * @param {function} onChange   변경이벤트함수
 * @returns
 */
const CurrenyInput = ({ label, value, onChange }) => {
  return (
    <>
      <div>
        <label>{label}:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(label, e.target.value)}
        ></input>
      </div>
    </>
  );
};

function App() {
  // krw, usd
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });
  // change 이벤트 함수
  const onChange = (label, value) => {
    if (label === "krw") {
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else if (label === "usd") {
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <>
      <div>
        <h1>환율 변환기 (KRW-USD)</h1>
        <CurrenyInput label={"krw"} value={state.krw} onChange={onChange} />
        <CurrenyInput label={"usd"} value={state.usd} onChange={onChange} />
      </div>
    </>
  );
}

export default App;
