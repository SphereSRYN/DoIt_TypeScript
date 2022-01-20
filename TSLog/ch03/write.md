타입스크립트 시각에서 객체와 타입의개념, 관련구문 볼거임.

타입스크립트는 타입스크립트 +자바스크립트 타입 제공함.

let & const 키워드
사실상 ESNext는 var를 사용하지 말라고 권고함.
let은 가변수 const는 불변수

타입주석
let 변수명: 타입[=초기값]
const 변수명: 타입 = 초기값.

let n: numnber =1
let b: boolean = true
let s: string = "yes"
let o: objext = {}

타입주석에 명시한 타입외에 값으로 바꾸려고 하면 오류 발생함.

타입추론
ts는 js와 호환성을 위해 타입주석 부분을 생략가능함.
아래오 같은 코드를 만나면 tsc는 대입연산자 = 오른쪽 값에 따라 변수의 타입을 지정함.
이를 타입추론이라고 함. (type inference)
let n =1 ( number라고 추롬)

any타입 역시 js와 호환을 위해 제공하는 타입.

let a: any = 0
a = true
a = {}

undefined타입
js에서 undefined는 값임.
ts에서는 값이기도 하고 타입이기도 함.

타입 상속 관계 보면,

1. any대빵
   2-1 number, boolean, string 2-2 object
   2-2-1 interface, class ...
   그리고 최하위에 undefined.

템플릿문자열
ts에서는 변수에 담긴 값을 조합해 문자열을 만들 수 있게 하는 템플릿 문자열을 제공한다.
let counnt = 0, message = '0+0='
let result = '${message} +${count}'

객체와 인터페이스

인터페이스.
ts는 객체의 타입을 정의할 수 있는 interface라는 키퉈드를 제공함.
인터페이스는 객체의 타입을 정의하는 것이 목적임.
인터페이스의 목적은 명시된 속성이 다 있는 객체만 유효하도록 객체의 타입 범위를 좁히는 데 있음.

선택속성
인터페이스를 설계할 때 어떤 속성은 반드시 있어야 하지만,
어떤 속성은 있어도 되고 없어도 되는 형태로 만들고 싶을 때가 있음.
이러한 속성을 선택속성(optional property)라 함.

```
interface IPerson2{
    name: String
    age: number
    etc?: boolean
}

let good: IPerson2 = {name: 'jack', age:32}
```

에러안남.

익명 인터페이스
인터페이스 키ㅝ드 사용안하고 인터페이스만드는 것.

let ai:{
name: String
age: number
etc?: boolean
} ={name: 'jack', age:32}

주로 함수 구현시 사용함.

클래스!
ts는 class, private, public, protected, implements, extend와 같은 키워드 제공함.

```
class Person{
name: string
age?: number
}
let jack: Person = new Person()
jack.name ='jack'; jack.age = 32;
console.log(jack)
```

생성자.

```
class Person{
constructor(public name: string, public age?: number){}
}
let jack : Person = new Person('jack', 32);
```
