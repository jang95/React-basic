import React from "react";
// import ColorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";

/**
 * Consumer 사이에 중괄호를 열어서 그 안에 함수 넣음
 * 이런 패턴을 Function as a child, 혹은 Render Props라고 함
 * 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달
 */
// const ColorBox = () => {
//   return (
//     <ColorProvider>
//       {(value) => (
//         <div
//           style={{
//             width: "64px",
//             height: "64px",
//             background: value.color,
//           }}
//         />
//       )}
//     </ColorProvider>
//   );
// };

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "128px",
              height: "128px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
