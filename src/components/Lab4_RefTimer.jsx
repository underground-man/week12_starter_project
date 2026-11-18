import { useEffect, useRef, useState } from 'react';

// LAB 4 (Slide 17): Timer ID를 useRef로 관리
export default function Lab4RefTimer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);
  const formattedTime = `${String(Math.floor(count / 60)).padStart(2, '0')}:${String(count % 60).padStart(2, '0')}`;

  const start = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setRunning(true);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p className="status">상태: {running ? 'Running' : 'Stopped'}</p>
      <div className="count">{count}</div>
      <p className="elapsed">경과 시간: {formattedTime}</p>
      <div className="controls">
        <button onClick={start} disabled={running}>Start</button>
        <button className="secondary" onClick={stop} disabled={!running}>Stop</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
      <p className="hint">Timer ID와 화면 표시용 상태의 차이를 설명해 보세요.</p>
    </div>
  );
}
