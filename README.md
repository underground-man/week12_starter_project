22300330 / 박찬

질문 1
App.jsx와 주요 Lab 컴포넌트의 역할은?

답변
App.jsx는 선택한 Lab을 화면에 보여 주고 탭 전환을 관리한다. Lab 1은 자동 Timer, Lab 2는 Timer 시작과 정지, Lab 3은 Input Focus, Lab 4는 Ref를 이용한 Timer 기능을 담당한다.

질문 2
Effect, Dependency Array, Cleanup은 어떻게 동작하는가?

답변
Effect는 Timer 같은 외부 작업을 실행한다. Dependency Array는 Effect가 다시 실행되는 조건을 정한다. Cleanup은 기존 Timer와 같은 작업을 정리한다.

질문 3
useRef의 .current 속성과 useState의 차이는?

답변
useRef의 값은 .current에 저장된다. .current가 바뀌어도 다시 렌더링되지 않는다. useState의 값이 바뀌면 화면이 다시 렌더링된다.

질문 4
useEffect와 useRef 관련 주요 코드는 어떻게 동작하는가?

답변
useEffect 관련 코드

useEffect(() => {
  if (!running) return;
  const id = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  return () => clearInterval(id);
}, [running]);

running이 true일 때 Timer를 실행한다. running이 바뀌거나 컴포넌트가 사라지면 기존 Timer를 정리한다.

useRef 관련 코드

const start = () => {
  if (timerRef.current !== null) return;
  timerRef.current = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  setRunning(true);
};

Timer ID를 timerRef.current에 저장한다. 이미 값이 있으면 새 Timer를 만들지 않아 중복 실행을 막는다.

질문 5
useEffect의 Dependency Array가 필요한 이유는?

답변
Effect가 실행되는 시점을 정하기 위해 필요하다. 필요한 값이 바뀔 때만 Effect를 다시 실행할 수 있다.

질문 6
Cleanup을 사용하지 않으면 어떤 문제가 발생할 수 있는가?

답변
컴포넌트가 사라져도 Timer가 계속 실행될 수 있다. Timer가 중복으로 만들어져 Count가 비정상적으로 증가할 수도 있다.

질문 7
useState와 useRef의 가장 중요한 차이는?

답변
useState 값의 변경은 다시 렌더링을 발생시킨다. useRef의 .current 값 변경은 다시 렌더링을 발생시키지 않는다.

질문 8
LAB 2와 LAB 4의 Timer 관리 방식은 어떻게 다른가?

답변
LAB 2는 running State와 useEffect로 Timer를 관리한다. LAB 4는 Timer ID를 useRef에 저장하고 버튼 함수에서 직접 관리한다.
