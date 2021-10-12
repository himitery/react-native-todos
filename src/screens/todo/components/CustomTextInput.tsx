import React, { useCallback } from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Conditional from '@hocs/Conditional';

const { height } = Dimensions.get('window');

interface CustomTextInputProps {
  title?: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  titleStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  textInputProps?: TextInputProps;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  title,
  placeholder,
  value,
  setValue,
  titleStyle,
  textInputStyle,
  textInputProps,
}) => {
  const handleOnChange = useCallback((text: string) => {
    setValue(text);
  }, []);

  return (
    <View style={styles.container}>
      <Conditional condition={!!title}>
        <Text style={styles.title}>{title}</Text>
      </Conditional>
      <TextInput
        {...textInputProps}
        style={styles.input}
        placeholder={placeholder}
        selectionColor={'mediumslateblue'}
        onChangeText={handleOnChange}
        multiline
        numberOfLines={10}
        textAlignVertical={'top'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    maxHeight: height / 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },
});

export default CustomTextInput;
