import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
}
export const CustomButton: React.FC<CustomButtonProps> = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={styles.loginText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: '85%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800000',
    marginBottom: 10,
  },
  loginText: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
