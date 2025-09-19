//함수 표현식
//변수에 함수를 넣는다.
//func(); ReferenceError: Cannot access 'func' before initialization
const func = function () {
  console.log("func");
};
func();

//화살표 함수
const arrowFunc = () => {};
//function 키워드 생략
//(패러미터) => {본문}
//자바의 경우 : (패러미터) -> {본문}
//파이썬의 경우 : lamda 패러미터 : 본문
const arrowFunc2 = (a, b) => {
  return a + b;
};

//패러미터(매개변수)가 1개인 경우에는 () 생략 가능
const arrowFunc3 = (a) => {
  return a * 2;
};

//값을 바로 리턴하는 경우에는 {}와 return 생략 가능
const arrowFunc4 = (a, b) => a + b;
const arrowFunc5 = (a) => a * 2;

//호이스팅
const result = hoistingFunc();
function hoistingFunc() {
  console.log("hoistingFunc");
  return 100;
} // 함수 선언식 -> 호이스팅 됨

//함수 표현식, 화살표 함수는 호이스팅 안됨
//암시적 표현 형태는 축약화가 가능하다?

console.log("result1", result1);
const add2 = function (a, b) {
  return a + b;
}; // 함수 표현식
const result2 = add2(10, 13);
console.log("result2", result2);
// 화살표 함수
const add3 = (a, b) => {
  return a + b;
};
const result3 = add3(10, 13);
console.log("result3", result3);
const add4 = (a, b) => a + b; // 암시적 표현
const result4 = add4(10, 13);
console.log("result4", result4);
