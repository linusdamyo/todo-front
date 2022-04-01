import React from 'react';
import TodoCreateView from './view/TodoCreateView';
import TodoListView from './view/TodoListView';
import TodoSearchOptionView from './view/TodoSearchOptionView';
import * as API from '../../utils/api';

export default function TodoPage() {
  const [list, setList] = React.useState([]);
  const [searchOption, setSearchOption] = React.useState({});

  React.useEffect(() => {
    getTodoList();
  }, [])

  const getTodoList = () => {
    API.getTodoList(searchOption)
    .then((response) => {
      setList(response.data.list)
    })
    .catch(API.errorHandler);
  }

  const createTodo = ({ contents }) => {
    API.createTodo({ contents })
    .then(() => {
      getTodoList();
    })
    .catch(API.errorHandler);
  }

  const applySearchOption = ({ contents, isDone, createdRange }) => {
    setSearchOption({
      contents: contents ?? searchOption.contents,
      isDone: isDone ?? searchOption.isDone,
      createdRange: createdRange ?? searchOption.createdRange,
    });
    getTodoList();
  }

  const resetSearchOption = () => {
    setSearchOption({});
    getTodoList();
  }

  const makeTodoReference = (id, referenceId) => {
    API.makeTodoReference(id, referenceId)
    .then(() => {
      getTodoList();
    })
    .catch(API.errorHandler);
  }

  const updateTodo = (id, contents) => {
    API.updateTodo(id, { contents })
    .then(() => {
      getTodoList();
    })
    .catch(API.errorHandler);
  }

  const deleteTodo = (id) => {
    API.deleteTodo(id)
    .then(() => {
      getTodoList();
    })
    .catch(API.errorHandler);
  }

  const makeTodoDone = (id) => {
    API.makeTodoDone(id)
    .then(() => {
      getTodoList();
    })
    .catch(API.errorHandler);
  }

  const makeTodoReady = (id) => {
    API.makeTodoReady(id)
    .then(() => {
      getTodoList();
    })
    .catch(API.errorHandler);
  }

  return (
    <>
      <TodoSearchOptionView
        applySearchOption={applySearchOption}
        resetSearchOption={resetSearchOption}
      />
      <TodoCreateView
        createTodo={createTodo}
      />
      <TodoListView
        list={list}
        makeTodoReference={makeTodoReference}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        makeTodoDone={makeTodoDone}
        makeTodoReady={makeTodoReady}
      />
    </>
  );
}
