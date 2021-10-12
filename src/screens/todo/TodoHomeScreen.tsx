import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';

import TodoList from '@screens/todo/components/TodoList';
import CreateTodoItemButton from '@screens/todo/components/header/CreateTodoItemButton';

export const TodoHomeScreenOptions: StackNavigationOptions = {
  title: 'Todo List',
  headerRight: () => <CreateTodoItemButton />,
};

const TodoHomeScreen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 12,
  },
});

export default TodoHomeScreen;
