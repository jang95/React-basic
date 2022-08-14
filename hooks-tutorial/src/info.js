import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  /**
   * useEffect 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
   * 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 생각해도 무방
   *
   * useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고,
   * 업데이트 될 때, 실행하지 않으려면 함수의 두 번째 파마리터로 비어 있는 배열을 넣어 주면 됩니다.
   */

  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!.');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // },);

  /**
   * 특정 값이 업데이트될 때만 실행하고 싶을 때는 두 번째 파라미터로 전달되는 배열 안에
   * 검사하고 싶은 값을 넣어주면 됨
   * useState를 통해 관리하고 있는 상태를 넣어 주어도 되고, props로 전달받은 값을 넣어도 됨
   */

  /**
   * 컴포넌트가 <언마운트 되기 전>이나 <업데이트 되기 직전>에 어떠한 작업을 수행하고 싶다면
   * useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 함
   */

  /**
   * 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의
   * 두 번째 파라미터에 비어있는 배열 넣으면 됨
   */

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
