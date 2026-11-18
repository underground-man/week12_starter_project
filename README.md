22300330 / 박찬


GitHub URL

https://github.com/2026-2-OSS/assign12-c02-22300330

Vercel URL

https://week12-starter-project-liard.vercel.app/



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

Customizing

App.jsx
프로젝트 제목을 변경. 

App.css
전체 배경색, 활성 탭, 버튼 색상과 Lab 카드 그림자를 변경했다.

Lab2_TimerControl.jsx, Lab4_RefTimer.jsx
Count를 00:00 형식으로 보여 주는 경과 시간 표시를 추가했다.

Project Information

이 프로젝트는 useEffect와 useRef의 동작을 이해하기 위한 React Hooks 실습 프로젝트이다. 4개의 Lab을 통해 Timer의 생성과 정리, 실행 상태 관리, Input DOM 접근, useRef를 이용한 Timer 제어를 구현했다.

Starter Project

https://github.com/2026-2-OSS/week12_starter_project



실행 화면

전체 실행 화면과 Lab 1부터 Lab 4까지의 실행 결과 이미지를 캡처한 후 추가한다.

Lab 구현 내용과 결과

Lab 1
useEffect와 setInterval을 사용하여 Count가 1초마다 증가하도록 구현했다. Functional State Update를 사용하고 Cleanup에서 Timer를 제거했다.

Lab 2
running State와 useEffect를 사용하여 Start, Stop, Reset 기능을 구현했다. Cleanup을 사용하여 Timer의 중복 실행을 방지했다.

Lab 3
useRef로 Input DOM 요소를 참조했다. Focus 버튼은 입력창으로 Focus를 이동하고 Clear 버튼은 입력값을 지운 후 다시 Focus를 이동한다.

Lab 4
Timer ID를 useRef에 저장하여 Start, Stop, Reset 기능을 구현했다. 중복 Start를 막고 컴포넌트가 사라질 때 Timer를 정리했다.



새롭게 배운 내용

첫째, useState말고도 다른 
둘째, Cleanup을 사용해야 Timer와 같은 외부 작업이 중복되거나 남아 있는 문제를 막을 수 있다는 것을 배웠다.
셋째, useState는 값이 바뀌면 다시 렌더링되지만 useRef의 값 변경은 다시 렌더링되지 않는다는 것을 배웠다.

어려웠던 점과 해결 방법
 Lab 4에서timerRef.current를 확인하지 않아 중복 실행되어서 수정하였다.

AI 활용 내용과 느낀 점

AI를 활용하여 useEffect와 useRef의 차이를 이해하고 TODO 코드 구현과 오류 확인에 도움을 받았다.
생성된 코드를 그대로 사용하기보다 각 코드가 어떤 역할을 하는지 확인하면서 적용했다.
AI는 빠르게 방향을 찾는 데 도움이 되었지만 최종 동작은 직접 확인해야 한다고 느꼈다.




