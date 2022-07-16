import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log('reducer: action.value: ', action.value);
  console.log('reducer: action: ', action);
  console.log('reducer: action.name: ', action.name);
  console.log('reducer: state: ', state);
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  const onChange = e => {
    console.log('onChange: e', e.target);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name = "name" value={name} onChange={onChange} />
        <input name = "nickname" value={nickname} onChange={onChange} />
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