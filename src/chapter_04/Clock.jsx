import React from "react";

function Clock(props) { // 현재시간 출력 컴포넌트
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재시간: {new Date().toLocaleTimeString()} </h2>
        </div>
    );
}

export default Clock;


/**
 * import { createRoot } from "react-dom/client"
 * import Clock from './chapter_04/Clock';

const root = createRoot(document.getElementById('root'))

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
 */