/* 
다음 요구사항을 만족하는 코드를 작성하세요

- 변수 a의 저장된 값의 타입을 문자열로 출력하세요
- 조건문과 typeof 연산자를 이용해 코드를 작성하세요
  - ex) a가 number 타입이라면 console.log("숫자")
  - ex) a가 string 타입이라면 console.log("문자열")
  - ex) a가 boolean 타입이라면 console.log("불리언")
  - ...
*/

const a = true;

switch (typeof a) {
  case "string":
    print("문자열");
    break;
  case "number":
    print("숫자");
    break;
  case "boolean":
    print("불리언");
    break;
  case "symbol":
    print("심볼");
    break;
  case "undefined":
    print("언디파인드");
    break;
  case "object":
    print("객체");
    break;
  case "function":
    print("함수");
    break;
  default:
    print("찾을 수 없습니다.");
    break;
}

function print(text) {
  console.log(text);
}
