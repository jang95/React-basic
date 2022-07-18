import React, {useState, useMemo, useCallback, useRef} from "react";

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  /**
   * @method reduce Array.prototype.reduce()
   * 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
   * @param accumulator 누산기, 콜백의 반환값을 누적, 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서
   *                    initiaValue를 제공한 경우에는 initalValue의 값임
   * @param currentValue: 처리할 현재 요소
   * @param currentIndex: 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
   * @param array: reduce()를 호출한 배열
   */
  const sum = numbers.reduce((a, b) => a + b);
  console.log('sum: ', sum);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null); // useRef를 사용하여 ref 설정

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생선

  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  )
}

export default Average;