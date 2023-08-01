import React, {FC} from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';

interface InputFieldProps {
  label: string;
  icon: React.ReactNode;
  inputType: 'Password' | undefined; // Replace 'Other' with any other possible input type
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeFunction: (text: string) => void;
  textColor?: string;
}

export const InputField: FC<InputFieldProps> = ({
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
          placeholderTextColor={textColor || '#000'} // Use '#000' as default placeholder text color
          keyboardType={keyboardType}
          autoCapitalize="none"
          secureTextEntry={inputType === 'Password'}
          onChangeText={onChangeFunction}
        />
      ) : (
        <TextInput
          style={styles.TextInputPassword}
          placeholder={label}
          placeholderTextColor={textColor || '#000'}
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
