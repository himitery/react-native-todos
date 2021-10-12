import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface CustomButtonProps {
  buttonText: string;
  textColor?: string;
  buttonColor?: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  textColor,
  buttonColor,
  onPress,
  textStyle,
  buttonStyle,
}) => {
  const textColorStyle = useMemo<StyleProp<TextStyle>>(() => ({ color: textColor }), [textColor]);
  const buttonColorStyle = useMemo<StyleProp<ViewStyle>>(() => ({ backgroundColor: buttonColor }), [buttonColor]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, buttonStyle, buttonColorStyle]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, textColorStyle, textStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CustomButton;
