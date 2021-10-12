import React, { useEffect } from 'react';
import TodoNavigator from '@navigations/stack/TodoNavigator';
import { useSetRecoilState } from 'recoil';
import { TodoItem } from '@screens/todo/constants';
import { todoRepository } from '@stores/recoil';
import { TodoRepository } from '@stores/TodoRepository';

const Main: React.VFC = () => {
  const setTodoItems = useSetRecoilState<TodoItem[]>(todoRepository);

  useEffect(() => {
    TodoRepository.get().then((todoItems) => {
      setTodoItems(todoItems);
    });
  }, []);

  return <TodoNavigator />;
};

export default Main;
