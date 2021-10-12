import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import _ from 'lodash';
import { TodoItem } from '@screens/todo/constants';
import TodoListHeader from '@screens/todo/components/TodoListHeader';
import TodoListItem from '@screens/todo/components/TodoListItem';
import { useRecoilValue } from 'recoil';
import { todoRepository } from '@stores/recoil';

const TodoList: React.VFC = () => {
  const todoItems = useRecoilValue<TodoItem[]>(todoRepository);
  const [reversed, setReversed] = useState<boolean>(false);

  const data = useMemo<TodoItem[]>(
    () =>
      _(todoItems)
        .orderBy((item) => item.date, [reversed ? 'desc' : 'asc'])
        .value(),
    [todoItems, reversed],
  );

  const totalCount = useMemo<number>(() => data.length, [data]);
  const checkedCount = useMemo<number>(() => data.filter((item) => item.status === true).length, [data]);

  const keyExtractor = useCallback((item) => item.id, []);
  const header = useCallback(
    () => <TodoListHeader total={totalCount} checked={checkedCount} reversed={reversed} setReversed={setReversed} />,
    [totalCount, checkedCount, reversed],
  );
  const renderItem = useCallback<ListRenderItem<TodoItem>>(({ item }) => <TodoListItem {...item} />, []);

  return <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} ListHeaderComponent={header} />;
};

export default TodoList;
