import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Conditional from '@hocs/Conditional';

interface TodoListHeaderProps {
  total: number;
  checked: number;
  reversed: boolean;
  setReversed: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoListHeader: React.FC<TodoListHeaderProps> = ({ total, checked, reversed, setReversed }) => {
  const handleReversed = useCallback(() => {
    setReversed((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, styles.innerLeftContainer]}>
        <Text style={styles.counterText}>전체: {total}</Text>

        <Text style={styles.counterText}>
          완료: <Text style={[styles.counterText, styles.checkedText]}>{checked}</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.innerContainer, styles.innerRightContainer]}
        activeOpacity={0.5}
        onPress={handleReversed}
      >
        <Conditional condition={!reversed}>
          <AntDesign name="downcircleo" size={20} color="black" />
        </Conditional>

        <Conditional condition={reversed}>
          <AntDesign name="upcircleo" size={20} color="black" />
        </Conditional>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    borderRadius: 20,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  innerContainer: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerLeftContainer: {
    flexDirection: 'row',
  },
  innerRightContainer: {
    width: 32,
  },
  counterText: {
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 12,
    color: 'black',
  },
  checkedText: {
    color: 'blue',
  },
});

export default TodoListHeader;
