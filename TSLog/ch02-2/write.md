모듈화~

export default키워드는 한 모듈이 내보내는 기능 중 오직 한 개에만 붙일 수 있다.
export default가 붙은 기능은 import 문으로 불러올 떄 중괄호 없이 사용할 수 있다.
export default는 export가 있는 파일애서도 사용 가능하다.

외부패키지를 사용할 떄 import문
이번에는 외부 패키지를 사용할 때 import문 사용법을 알아보겠음
일단 실습을 위해 chance와 ramda 패키지 설치 ㄱㄱ.

npm i -S chance ramda => dependencies 항목에.
npm i -D @types/chance @types/ramda => devDependencied항목에.

chance는 그럴듯한 가짜데이터를 만들어주는 데 사용됨.
ramda는 함수형 유틸리티 패키지임.

chance패키지는 Chance클래스 하나만 export default형태로 제공함.
ramda는 다양한 기능을 제공하므로 alias로 import.

그리고 둘다 외부패키지이므로 node_modules 디렉터리 아래에 있음. 그래서 경로 생략하고 그냥 ramda, chance로 import 가능한 거.

tsc --help 실행.
tsc는 컴파일옵션과 파일목록 두가지를 입력 받음.
tsconfig.json에서,
compilerOptions는 명령형식에서의 옵션.
include는 src하위 디렉터리에 있는 모든 파일을 컴파일 대상으로 포함시키겠다는 의미임.

```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": {"*":["node_modules/*"]}
  },
  "include": ["src/**/*"]
}
```

module키
ts 소스코드가 컴파일되어 만들어진 es5 js코드는 웹브와 node.js 양쪽에서 모두 동작해야함. 그런데 웹브와 노드는 물리적으로 동작하는 방식이 달라서
여루 개의 파일(=모듈)로 분할된 js코드 또한 웹브와 노드 양쪽에서 각각 다르게 동작함.

자바스크림트 모듈은 웹브에서는 AMD(asynchronous module definition)방식으로 동작하고, 노드제이에스에서는 CommonJS방식으로 동작함.

tsconfig.ts 파일에서 compilerOptions. 항목의 module키는
동작 대상 플랫폼이 웹브인지 노드제이에스(서버)인지 구분해 그에 맞는 모듈 방식으로 컴파일 하려는 목적으로 설정함. 플랫폼에 따라 다음과 같은 값을 설정할 수 있음.
웹브: amd, 노드제예스: commnJS

target키
트랜스 파일할 대상 js버전을 설정함.

baseUrl & OutUrl키
트랜스 파일된 em5 js 파일을 저장하는 디렉터리를 설정.
tsc는 tsconfig.ts가 있는 디렉터리에서 실행되니까 currnt dir를 의미하는 '.'로 OutUrl에는 빌드된 결과가 만들어지는 곳.

paths키
소스 파일의 import 문에서 from 부분을 해석할 떄 찾아야 하는 디렉터리를 설정함. 외부 패키지도 놓칠 수 없으니 ["node_modules/*"]도 넣음.

esModuleInterop키
오픈소스 js 라이브러리 중에는 웹브에서 동작한다는 가정으로 만들어진 것이 있음. 이들은 commonJS방식으로 동작하는 타입스크립트 코드에 혼란을 줄 수 있음. chance는 AMD방식을 전제해서 구현된 라이브러리임. 따라서 chance 패키지가 동작하려면 esModuleInterop키 값을 반드시 true로 설정해야 함.

sourceMap키
souceMap 키 값이 true면 트랜스파일 디렉터리에는 .js파일 이외에도
.js.map파일이 만들어짐. 이 소스맵 파일은 변환된 자바스크립트 코드가 타입스크립트 코드의 어디에 해당하는지를 알려줌. 소스맵 파일은 주로 디버길 할 때 사용됨.
