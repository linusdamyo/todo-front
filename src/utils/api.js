import axios from "axios";

export const errorHandler = error => {
  if (error.response.status === 401) {
    alert('로그인이 필요해요.');
    window.location.href = '/';
  } else {
    alert(error)
  }
};

const Get = (url, params = {}) => axios.get(url, { params });
const Delete = (url, params = {}) => axios.delete(url, { params });
const Post = (url, params = {}) => axios.post(url, params, {});
const Patch = (url, params = {}) => axios.patch(url, params, {});
const Put = (url, params = {}) => axios.put(url, params, {});

export const getTodoList = (searchOption) => Get(`/api/todos`, searchOption);
export const createTodo = (params) => Post('/api/todos', params);
export const updateTodo = (id, params) => Patch(`/api/todos/${id}`, params);
export const deleteTodo = (id) => Delete(`/api/todos/${id}`);
export const makeTodoDone = (id) => Put(`/api/todos/${id}/done`);
export const makeTodoReady = (id) => Put(`/api/todos/${id}/ready`);
export const makeTodoReference = (id, referenceId) => Post(`/api/todos/${id}/reference`, { referenceId });
