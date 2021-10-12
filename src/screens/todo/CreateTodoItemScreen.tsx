import React, { useCallback, useState } from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import uuid from 'uuid-random';

import { todoRepository } from '@stores/recoil';
import CustomTextInput from '@screens/todo/components/CustomTextInput';
import CustomButton from '@screens/todo/components/CustomButton';
import { TodoItem } from '@screens/todo/constants';
import HeaderCloseButton from '@screens/todo/components/header/HeaderCloseButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TodoNavigation } from '@constants/navigation';

export const CreateTodoItemScreenOptions: StackNavigationOptions = {
  title: 'New Todo',
  headerTitleAlign: 'center',
  headerLeft: () => <HeaderCloseButton />,
  headerLeftContainerStyle: {
    paddingLeft: 12,
  },
};

const CreateTodoItemScreen: React.VFC = () => {
  const navigation = useNavigation<NavigationProp<TodoNavigation.CreateTodoItem>>();

  const setTodoItems = useSetRecoilState<TodoItem[]>(todoRepository);
  const [value, setValue] = useState<string>('');

  const handleButtonOnPress = useCallback(() => {
    const newTodo: TodoItem = {
      id: uuid(),
      value,
      date: new Date(),
      status: false,
    };
    setTodoItems((existing) => [...(existing || []), newTodo]);
    navigation.goBack();
  }, [navigation, value]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomTextInput title={'Contents'} value={value} setValue={setValue} />
        <CustomButton
          buttonText={'Add'}
          textColor={'white'}
          buttonColor={'mediumpurple'}
          onPress={handleButtonOnPress}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    padding: 12,
  },
  buttonStyle: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

export default CreateTodoItemScreen;
