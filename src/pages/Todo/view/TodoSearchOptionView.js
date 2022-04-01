/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'
import React from 'react';

const style = css`
  margin: 10px;
`

export default function TodoSearchOptionView({ applySearchOption, resetSearchOption }) {
  const [contents, setContents] = React.useState('');
  const [isDone, setIsDone] = React.useState(null);
  const [createdStart, setCreatedStart] = React.useState('');
  const [createdEnd, setCreatedEnd] = React.useState('');

  const onChangeContents = (e) => {
    setContents(e.target.value);
  }

  const onChangeIsDone = (isDone) => {
    setIsDone(isDone);
  }

  const onChangeCreatedStart = (e) => {
    setCreatedStart(e.target.value);
  }

  const onChangeCreatedEnd = (e) => {
    setCreatedEnd(e.target.value);
  }

  const onClickApply = (e) => {
    const searchOption = {};
    if (contents) {
      searchOption.contents = contents;
    }
    if (isDone !== null) {
      searchOption.isDone = isDone;
    }
    if (createdStart && createdEnd) {
      searchOption.createdRange = [createdStart, createdEnd];
    }
    applySearchOption(searchOption);
  }

  const onClickReset = (e) => {
    setContents('');
    setIsDone(null);
    setCreatedStart('');
    setCreatedEnd('');
    resetSearchOption();
  }

  return (
    <div css={style}>
      <div>
        내용
        <input
          type='text'
          value={contents}
          onChange={onChangeContents}
        />
      </div>
      <div>
        완료 여부
        <input
          type="radio"
          id="is-done-all"
          name="isDone"
          checked={isDone === null}
          onChange={() => onChangeIsDone(null)}
        />
        <label htmlFor='is-done-all'>모두</label>
        &nbsp;
        <input
          type="radio"
          id="is-done-true"
          name="isDone"
          checked={isDone === true}
          onChange={() => onChangeIsDone(true)}
        />
        <label htmlFor='is-done-true'>완료</label>
        &nbsp;
        <input
          type="radio"
          id="is-done-false"
          name="isDone"
          checked={isDone === false}
          onChange={() => onChangeIsDone(false)}
        />
        <label htmlFor='is-done-false'>미완료</label>
      </div>
      <div>
        날짜
        <input
          type="text"
          value={createdStart}
          onChange={onChangeCreatedStart}
        />
        ~
        <input
          type="text"
          value={createdEnd}
          onChange={onChangeCreatedEnd}
        />
      </div>
      <div>
        <button
          onClick={onClickApply}
        >
          적용
        </button>
        <button
          onClick={onClickReset}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
