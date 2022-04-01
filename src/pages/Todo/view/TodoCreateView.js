/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'
import React from 'react';

const style = css`
  margin: 10px;
`

export default function TodoCreateView({ createTodo }) {
  const [contents, setContents] = React.useState('');

  const onChangeContents = (e) => {
    setContents(e.target.value);
  }

  const onClickButton = (e) => {
    createTodo({ contents });
    setContents('');
  }

  return (
    <div css={style}>
      <input
        type='text'
        value={contents}
        onChange={onChangeContents}
      />
      <button
        onClick={onClickButton}
      >
        생성
      </button>
    </div>
  );
}
