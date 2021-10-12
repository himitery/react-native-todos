import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { TodoNavigation } from '@constants/navigation';
import TodoHomeScreen, { TodoHomeScreenOptions } from '@/screens/todo/TodoHomeScreen';
import CreateTodoItemScreen, { CreateTodoItemScreenOptions } from '@screens/todo/CreateTodoItemScreen';
import { Platform } from 'react-native';

export type TodoNavigatorParamList = {
  [TodoNavigation.TodoHome]: undefined;
  [TodoNavigation.CreateTodoItem]: undefined;
};

const Stack = createStackNavigator<TodoNavigatorParamList>();

const TodoNavigator: React.VFC = () => {
  return (
    <Stack.Navigator screenOptions={StackNavigatorOptions}>
      <Stack.Group>
        <Stack.Screen name={TodoNavigation.TodoHome} component={TodoHomeScreen} options={TodoHomeScreenOptions} />
      </Stack.Group>

      <Stack.Group screenOptions={modalScreenOptions}>
        <Stack.Screen
          name={TodoNavigation.CreateTodoItem}
          component={CreateTodoItemScreen}
          options={CreateTodoItemScreenOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const StackNavigatorOptions: StackNavigationOptions = {
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontWeight: '700',
    fontSize: 24,
    color: 'black',
  },
  headerStyle: {
    height: 100,
    borderRadius: 20,
  },
};

const modalScreenOptions: StackNavigationOptions = {
  headerStyle: {
    height: Platform.select({
      android: 80,
      ios: 60,
    }),
    borderRadius: 12,
  },
  presentation: 'modal',
};

export default TodoNavigator;
