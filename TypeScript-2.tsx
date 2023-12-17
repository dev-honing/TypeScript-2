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

// createComponent() 함수 정의
function createComponent(element: string, props: Props, children?: string[]): string {
  let tagParts = [`<${element}`];

  // CSS 스타일 객체를 문자열로 변환하는 함수
  const styleToString = (style: Partial<CSSStyleDeclaration>): string => {
    // 스타일 객체의 키-값 쌍을 배열로 변환하고, 각 쌍을 'key: value;'의 형태로 반환
    const entries = Object.entries(style);
    const objectValues = entries.map(([key, value]) => `${key}: ${value};`);
    // 변환된 문자열들을 합쳐서 최종 스타일 문자열로 반환
    const result = objectValues.join('');
    return result;
  };

  
}