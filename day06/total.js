/**
 * Quiz 1
 * [배열 분할 및 결합하기]
 * 목표 : 배열을 반으로 나눈 다음, 순서를 바꿔 다시 결합해야 합니다.
 *
 */

function splitAndCombine(arr) {
  const newArr1 = arr.slice(0, 4);
  const newArr2 = arr.slice(4, 8);
  //console.log(newArr1, newArr2);
  return [...newArr2, ...newArr1];
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]

/** Quiz 2
 * [이벤트 로그 처리하기]
 * 목표: 배열 형태의 이벤트 로그(기록)중 "클릭" 이벤트만 특별한 형태로 출력해야 합니다.
 *
 */

function printClickEventLogs(logs) {
  for (let log of logs) {
    const localeDate = new Date(log.date).toLocaleString();
    console.log(`${log.type}: ${localeDate}`);
  }
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00

/**
 * Quiz 3
 * [카페 할인 이벤트]
 * 목표: 성공적인 카페 홍보를 위해서 모든 메뉴에 500원씩 할인을 적용하려고 합니다.
 *
 */

function getDiscountedMenus(menus) {
  return menus.map((menu) => ({ ...menu, discountedMenus: menu.price - 500 }));
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }

/**
 * Quiz 4
 * [최신순으로 도서 정렬하기]
 * 목표: 여러권의 도서를 최근에 출간된 순으로 정렬하려고 합니다.
 *
 */

function getSortedBooks(books) {
  return books.sort((obj1, obj2) => {
    if (obj1.published.getTime() > obj2.published.getTime()) return -1;
    else return 1;
  });
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
// 출력 결과 :
// { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
// { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
// { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
// { title: '클린코드', published: 2013-12-23T15:00:00.000Z }
