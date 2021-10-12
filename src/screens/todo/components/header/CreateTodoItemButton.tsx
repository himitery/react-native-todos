import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import { TodoNavigation } from '@constants/navigation';
import { useNavigation } from '@react-navigation/native';
import { TodoNavigatorParamList } from '@navigations/stack/TodoNavigator';

type NavigationProp = StackNavigationProp<TodoNavigatorParamList, TodoNavigation.TodoHome>;

const CreateTodoItemButton: React.VFC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleOnPress = useCallback(() => {
    navigation.navigate(TodoNavigation.CreateTodoItem);
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={handleOnPress}>
      <Feather name="plus-circle" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default CreateTodoItemButton;
