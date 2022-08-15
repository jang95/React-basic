import { createContext, useState } from "react";

/**
 * 새 Context를 만들 때는 createContext 함수 사용
 * 파라미터에는 해당 Context의 기본 상태를 지정
 */
// const ColorContext = createContext({ color: "black" });
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    /**
     * 업데이트 함수를 actions로 묶어서 전달
     * => 나중에 다른 컴포넌트에서 Context의 값을 사용할 때 편함
     */
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
