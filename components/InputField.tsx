import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  icon: React.ReactNode;
  inputType: 'Password' | 'Text';
  textColor: string;
  onChangeFunction: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
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
          autoCapitalize={'none'}
          onChangeText={onChangeFunction}
        />
      ) : (
        <TextInput
          style={styles.TextInputPassword}
          placeholder={label}
          placeholderTextColor={textColor}
          keyboardType={keyboardType}
          autoCapitalize={'none'}
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
