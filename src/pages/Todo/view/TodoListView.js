/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'
import TodoListRowView from './TodoListRowView';

const style = css`
  margin: 10px;
`

export default function TodoListView({
  list,
  makeTodoReference, updateTodo, deleteTodo, makeTodoDone, makeTodoReady,
}) {
  return (
    <div css={style}>
      {list.map(item =>
        <TodoListRowView
          key={item.id}
          {...item}
          makeTodoReference={makeTodoReference}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          makeTodoDone={makeTodoDone}
          makeTodoReady={makeTodoReady}
        />
      )}
    </div>
  );
}
