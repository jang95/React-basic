import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();

  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  /**
   * Editor에서 사용할 useEffect에서 onChangeField를 사용
   * 따라서 useCallback를 사용해야 나중에 Editor에서 사용할 useEffect가 컴포넌트가
   * 화면에 나타났을 때 딱 한 번만 실행되기 때문
   */
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  // 언마운트될 때 초기화
  /**
   * 사용자가 WritePage에서 벗어날 때는 데이터를 초기화해야함
   * 컴포넌트가 언마운트될 때 useEffect로 INITIZE 액션을 발생시켜서 리덕스의 write 관련 상태를 초기화
   */
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
