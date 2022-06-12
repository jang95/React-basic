import React, { useState } from "react";

const Say = () => {
  /**
   * 클래스형 컴포넌트에서의 state 초깃값은 객체 형태로 넣어주어야 함
   *
   * useState에서는 객체가 아니여도 상관이 없음
   * 함수를 호출하면 배열이 반환
   * 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소느 상태를 바꾸어주는 함수
   *                                      => 이 함수를 세터 (setter) 함수하고 함
   * 배열 비구조화 할당을 통해 이름을 자유롭게 정할 수 있음
   */
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  /**
   * 한 컴포넌트에서 useState 여러 번 사용하기
   */

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
