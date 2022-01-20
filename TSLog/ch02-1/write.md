npm i -D typescript ts-node

타입스크립트는 기본적으로 EXNEXT 자바스크립트 문법을 포함하고 있지만, 자바스크립트와는 완전히 다른 언어다.
tsc는 타입이 명시적으로 설정되어야만 코드가 문법에 맞게 작성되었는지르 검증해 코드를 동작시킨다.

이 때문에 자바스크립트로 개발된 chance, ramda와 같은 라이브러리들은 추가로 @types/chane, @types/ramda와 같은 타입 라이브러리들을 제공해야 한다.
ts는 또한 웹브라우저나 노드제이에스가 기본적으로 제공하는 타입의 존재도 그냥은 알지 못한다. promise와 같은 타입을 사용하려면
@types/node라는 패키지를 설치해야 한다. npm i -D @types/node


다른 사람에게 프로젝트를 전달할 떄는 node-modules디렉터리 모두 지움. 그래서 처음 전달받았을 때
package.json이 있는 디렉터리에서 npm i를 실행함. 그러면 package.json에 등록된 패키지들이
node-modules에 자동으로 설치됨.

tsconfig.json파일 만들기
타입스크립트 프로젝트는 타입스크립트 컴파일러의 설정파일인 tsconfig.json파일이 있어야 함.
이 파일은 tsc --init 명령으로 만들 수 있음. 터미널에서 실행하면 됨.
