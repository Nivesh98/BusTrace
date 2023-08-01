import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonGroupProps {
  buttons: Array<string>; // Replace 'string' with the appropriate type for your buttons
  doSomthingAfterClick: (item: string) => void; // Replace '() => void' with the appropriate function type
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  doSomthingAfterClick,
}) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (item: string, id: number) => {
    setClickedId(id);
    doSomthingAfterClick(item);
  };

  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity
            onPress={() => handleClick(buttonLabel, index)}
            key={index}
            style={[
              index === clickedId ? styles.buttonActive : styles.button,
              index === 0 ? styles.customStyleLeft : null,
              index === 1 ? styles.customStyleRight : null,
            ]}>
            <Text style={index === clickedId ? styles.textActive : styles.text}>
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8c00',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  buttonActive: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8b0000',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  text: {
    color: 'black',
  },
  textActive: {
    color: 'white',
  },

  customStyleLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  customStyleRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
