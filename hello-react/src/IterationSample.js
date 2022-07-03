import React, { useState } from "react";

const IterationSample = () => {
  // const names = ['눈사람', '얼음', '눈', '바람'];
  /**
   * 고유한 값이 없을 때만 index를 key값으로 사용
   * index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못함
   */
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1); // nextId 값에 1을 더함
    setNames(nextNames); // names 값을 업데이트
    setInputText(""); // inputText를 비움
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
