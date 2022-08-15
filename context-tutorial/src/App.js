import React from "react";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColor";

// const App = () => {
//   return (
//     /**
//      * Provider를 사용하고 value를 명시하지 않는다면 오류 발생
//      */
//     <ColorContext.Provider value={{ color: "red" }}>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   );
// };

const App = () => {
  return (
    /**
     * Provider를 사용하고 value를 명시하지 않는다면 오류 발생
     */
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
