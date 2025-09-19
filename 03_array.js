//자바 스크립트에서의 배열은 리스트에 더 가깝다
//배열(Array)
//1. 동일한 타입의 0개 이상의 데이터의 묶음
//2. 인덱스(index)를 사용하여 순서를 참조할 수 있음
//3. 길이는 최초의 메모리에 배정되어 선언한 길이에 고정적

//자바스크립트의 배열은 여기서 2번만 비스무리하게 가짐.
//자바스크립트 배열(JavaScript Array)
//1. 0개 이상의 데이터 묶음 (동일한 타입일 필요 없음)
//2. '숫자'로 되어 있는 키의 경우 인덱스로 분류되어 사용될 수 있음
//3. 길이는 유동적이며 심지어 외부에서 변화시킬 수 있는 값임

//비슷한 역할을 하는 데이터들을 묶을 때
//1) 순서가 있는 경우 2) 순서가 없는 경우

//[] C언어는 {} 자바스크립트는 []
const array = [10, 20, 30, 40, 50]; //0부터 시작

//배열은 일반적으로 const. 배열 자체는 다시 재할당하지 않고 내부에 요소들만 변경하기 위함
// 얕은 복사, 깊은 복사, 재할당
//얕은 복사(shallow copy) - 주소값 복사
//깊은 복사(deep copy) - 실제 값 복사
//재할당 - 아예 새로운 값을 할당
let a = [1, 2, 3];
let b = [a]; //b는 a를 포함하고 있다
console.log("a", a); //a [ 1, 2, 3 ]
console.log("b", b); //b [ [ 1, 2, 3 ] ]
//b가 a를 참조/포함하고 있다면 a가 현재의 a인 상태를 안 건드리길 선호 -> capsulation
//객체의 경우 -> 아예 다시 재할당 x
a = [4, 5, 6];
console.log("a", a); // a [ 4, 5, 6 ]
console.log("b", b); // b [ [ 1, 2, 3 ] ]

//-> a는 아예 재할당이 일어나버려 완전히 새로운 배열의 주소값을 갖고 있게 됨
//-> b는 여전히 이전의 a가 가리키던 주소값을 참조하고 있음(얕은 복사)
//a가 바뀌어도 b는 여전히 이전의 a를 가리키고 있음

//빈 배열
const empty = []; //비워놓고 채우기 가능
//비어있는 배열은 falsy한 값

//C.R.U.D -> 일반적으로 데이터 다루기
//Create(추가, 생성), Read(조회, 불러오기), Update(수정, 덮어씌우기), Delete(삭제)

array.push(60); //맨 뒤에 추가(주로 사용)
console.log("array", array);
array.unshift(0); //맨 앞에 추가
console.log("array", array);
array.splice(3, 0, 15); //3번 인덱스에 15 추가 (3번 인덱스부터 0개 지우고 15 추가)
console.log("array", array);

//Read
console.log("array[2]", array[2]); //20
console.log("array.length", array.length); //길이

console.log(array.slice(2, 5)); //2번 인덱스부터 5번 인덱스 전까지 (5번 인덱스는 포함 안 함)
console.log(array.slice(2)); //2번 인덱스부터 끝까지
console.log(array.slice(-2)); //뒤에서 2번째부터 끝까지
console.log(array); //원본은 그대로

//Update
array[2] = 100;

//Delete
array.pop(); //맨 뒤에서부터 제거(주로 사용)
console.log("array", array);
array.shift(); //맨 앞에서부터 제거
console.log("array", array);
array.splice(3, 1); //3번 인덱스부터 1개 제거
console.log("array", array);

//권장하지 않는 방법
delete array[2]; //2번 인덱스 제거(빈 칸이 생김)
console.log("array", array);

//자바 스크립트의 또 이상한 점 한가지
const arr2 = ["a", "b", "c", "d"];
console.log(arr2.length);
arr2.length = 1;
console.log(arr2.length);
console.log(arr2);
arr2.length = 4;
console.log(arr2.length);
console.log(arr2);
const arr3 = [];
arr3.length = 100;
console.log(arr3);
// 자바스크립트에서는 별도의 'clear'는 없는데... 그냥 length를 0으로 만들면 자리가 0으로 되면서 해당 데이터도 지워지는?
arr3.length = 0;
console.log(arr3[10]); // undefined
//인덱스 에러가 일어나지 않는다
//그래서 이런 에러를 방지하기 위해 if문으로 계속 검증하는 경우가 많음
if (arr3[10] !== undefined) {
  console.log(arr3[10]);
} else {
  console.log("존재하지 않는 인덱스");
}
