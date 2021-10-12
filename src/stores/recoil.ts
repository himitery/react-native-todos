import { atom, selector } from 'recoil';
import { TodoItem } from '@screens/todo/constants';
import { TodoRepository } from '@stores/TodoRepository';

const todos = atom<TodoItem[]>({
  key: 'todos',
  default: null,
});

export const todoRepository = selector<TodoItem[]>({
  key: 'todoRepository',
  get: ({ get }) => get(todos),
  set: ({ set, get }, incoming: TodoItem[]) => {
    set(todos, incoming);
    if (incoming.length > 0) TodoRepository.set(incoming);
  },
});
