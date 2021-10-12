import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TodoNavigation } from '@constants/navigation';

const HeaderCloseButton: React.VFC = () => {
  const navigation = useNavigation<NavigationProp<TodoNavigation.CreateTodoItem>>();

  const handleOnPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default HeaderCloseButton;
