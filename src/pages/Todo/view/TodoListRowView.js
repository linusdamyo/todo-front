/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'
import React from 'react';
import dayjs from 'dayjs';

const style = css`
  border: 1px solid #000;
`

export default function TodoListRowView({
  id, contents, isDone, createdAt, updatedAt, referenceList,
  makeTodoReference, updateTodo, deleteTodo, makeTodoDone, makeTodoReady,
}) {
  const [referenceId, setReferenceId] = React.useState('');
  const [contentsUpdated, setContentsUpdated] = React.useState('');

  const onChangeContents = (e) => {
    setContentsUpdated(e.target.value);
  }

  const onClickReference = () => {
    makeTodoReference(id, +referenceId);
    setReferenceId('');
  }

  const onClickUpdate = () => {
    updateTodo(id, contentsUpdated)
    setContentsUpdated('');
  }

  const onChangeDone = (e) => {
    if (e.target.checked) {
      makeTodoDone(id);
    } else {
      makeTodoReady(id);
    }
  }

  return (
    <div css={style}>
      <div>
        <input 
          type="checkbox"
          checked={isDone}
          onChange={onChangeDone}
        />
        (no){id}
      </div>
      <div>{contents}</div>
      <div>생성:{dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
      <div>수정:{dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss')}</div>
      <div>
        {referenceList.map(item => (
          <ReferenceTodo
            key={item.id}
            {...item}
          />
        ))}
        참조 추가:
        <input
          type="text"
          value={referenceId}
          onChange={(e) => setReferenceId(e.target.value)}
        />
        <button
          onClick={onClickReference}
        >
          추가
        </button>
      </div>
      <div>
        <input
          type="text"
          value={contentsUpdated}
          onChange={onChangeContents}
        />
        <button
          onClick={onClickUpdate}
        >
          수정
        </button>
      </div>
      <div>
        <button
          onClick={() => deleteTodo(id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

function ReferenceTodo({ id, referenceId }) {
  return (
    <span>
      @{referenceId}
    </span>
  )
}
