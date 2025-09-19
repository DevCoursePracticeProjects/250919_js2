// 클로저
// 자바스크립트에는 접근 제어자가 없다.
// 외부에서 접근하는 것을 막고 싶으면
// 함수에게 속한 변수는 접근할 수 없음(객체나, 클래스는 가능)

const c = {
  number: 0,
  count: function () {
    this.number++;
  },
};
c.count();
console.log("c.number", c.number); // 1
c.number = 100;
console.log("c.number", c.number); // 100

function makeCounter() {
  let number = 0; // 은닉화, 함수 스코프에 존재하면 외부에서 접근할 수 없음
  return {
    count() {
      number++;
    },
    getNumber() {
      return number;
    },
  };
}

const myCounter = makeCounter();
myCounter.count();
console.log(myCounter.getNumber()); // 1
myCounter.count();
console.log(myCounter.getNumber()); // 2

const myCounter2 = makeCounter();
console.log(myCounter2.getNumber()); // 0

//인자, 매개변수, 구조분해할당, 나머지매개변수, arguments...

// 구조 분해할당 (객체, 배열 -> 인덱스, 키 -> 변수)
const arr = ["java", "javascript", "spring"];

const [v1, v2, v3] = arr; // [내가 받아주고 싶은 만큼의 변수 갯수] = 배열이름

console.log(v3);

const [a1] = arr;

console.log(a1);

const [b1, b2, b3, b4] = arr;

console.log(b4);

const [c1, ...c2] = arr; // c1 1개 -> 나머지는 c2라는 이름의 배열로 넣는다
console.log(c1, c2);
const [d1, d2, d3, d4 = "default", ...d5] = arr; // 변수명 = 기본값을 입력하면 undefined일 경우 기본값을 준다
console.log(d4, d5);

// 객체 구조 분해 할당
const ob = { name: "kim", age: 100, money: 24 };
// const { name, age, money } = ob;
// console.log(name, age, money);
// const { name, age, money, job } = ob;
// console.log(name, age, money, job);
const { name: myName, age, money, job = "progammer" } = ob;
// 변수명을 수정해야한다면 속성명(프로퍼티명): 새로운변수명 / 속성명 = 기본값 (없을 때 주입되게 된다)
console.log(myName, age, money, job);

// 1. 구조분해할당을 함수 내부의 매개변수에서 쓰면 어떻게 될까?
function fun1(props) {
  const { name, age, job } = props;
}
function fun2({ name, age, job }) {
  // 객체를 매개변수로 받았다 // Props.
}
function fun3(a, b, c, ...data) {
  // ... -> 나머지. rest parameter.
  // 뭔지는 모르겠지만 배열로 만들어줌.
  console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

// 2. ... 연산자 -> rest 연산자 -> 분해 연산자
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1; // 주소값이 들어간다
// -> arr1이 바뀌면 arr2도 바뀌게 된다
console.log(arr1, arr2);
arr1[0] = 100;
console.log(arr1, arr2);
// 값만 복사하는게 항상 문제.
const arr3 = [...arr1]; // 한번 분해해서 원소들을 넣겠다는 의미
console.log(arr1, arr2, arr3);
arr1[1] = 256;
console.log(arr1, arr2, arr3);
// 객체에서도 통한다
const obj1 = { name: "kim" };
const obj2 = obj1; // obj1이 저장되어있는 메모리 공간과 obj2를 연결.
const obj3 = { ...obj1 }; // ...연산자 -> 내부의 key/value를 모두 분해해서 다시 집어넣은 것
console.log(obj1, obj2, obj3);
obj1.name = "lee";
console.log(obj1, obj2, obj3);
