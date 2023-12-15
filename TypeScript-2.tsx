// TypeScript-2.tsx

// TypeScript의 인터페이스 정의(interface 키워드)
interface Props {
  // '?'는 선택적 속성을 의미한다. 있을 수도/없을 수도 있다.
  id?: string;
  style?: Partial<CSSStyleDeclaration>; // CSSStyleDeclaration는 CSS 스타일을 나타내는 타입
  
  // 인덱스 시그니처: TypeScript에서 객체의 속성에 동적인 키를 사용할 때 사용하는 문법
  [key: string]: any; // any를 사용하면 어떤 타입이든 올 수 있다. 모든 타입에 대한 작성을 허용하는 것
}

// 인터페이스의 사전적인 정의는 '약속'이다.
// TypeScript의 interface는 약속이다.