import React, { useCallback, useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { TodoItem } from '@screens/todo/constants';
import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import { todoRepository } from '@stores/recoil';

interface TodoListItemProps extends TodoItem {}

const TodoListItem: React.FC<TodoListItemProps> = ({ id, value, date, status }) => {
  const setTodoItems = useSetRecoilState<TodoItem[]>(todoRepository);

  const itemStyle = useMemo<StyleProp<ViewStyle>>(() => (status ? styles.completeItem : null), [status]);

  const handleOnPress = useCallback(() => {
    setTodoItems((existing) => existing.map((item) => (item.id === id ? { ...item, status: !item.status } : item)));
  }, [id]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.innerContainer, itemStyle]} onPress={handleOnPress} activeOpacity={0.7}>
        <Text style={styles.value} numberOfLines={10}>
          {value}
        </Text>
        <Text style={styles.date}>{dayjs(date).format('YYYY년 MM월 DD일  HH:mm')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 16,
    backgroundColor: 'white',
  },
  completeItem: {
    borderColor: 'blue',
  },
  value: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
  },
  date: {
    fontWeight: '400',
    fontSize: 12,
    color: '#8D8D8D',
  },
});

export default TodoListItem;
