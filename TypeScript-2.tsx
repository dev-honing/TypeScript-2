// TypeScript-2.tsx

// TypeScript의 인터페이스 정의(interface 키워드)
interface Props {
  id?: string;
  style?: Partial<CSSStyleDeclaration>;
  [key: string]: any;
}

// 인터페이스의 사전적인 정의는 '약속'이다.
// TypeScript의 interface는 약속이다.