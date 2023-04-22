import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  onChangeFunction,
  textColor,
}) => {
  return (
    <View style={styles.inputViewPassword}>
      {icon}
      {inputType == 'Password' ? (
        <TextInput
          style={styles.TextInputPassword}
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor={textColor}
          secureTextEntry={true}
          onChangeText={onChangeFunction}
        />
      ) : (
        <TextInput
          style={styles.TextInputPassword}
          placeholder={label}
          placeholderTextColor={textColor}
          keyboardType={keyboardType}
          onChangeText={onChangeFunction}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputViewPassword: {
    backgroundColor: '#d2691e',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
    width: '95%',
    height: 35,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  TextInputPassword: {
    height: 50,
    flex: 1,
  },
});
