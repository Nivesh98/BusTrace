import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonGroupProps {
  buttons: string[];
  doSomthingAfterClick: (item: string) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  doSomthingAfterClick,
}) => {
  const [clickedId, setClickedId] = useState<number>(0);

  const handleClick = (item: string, id: number) => {
    setClickedId(id), doSomthingAfterClick(item);
  };
  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel: string, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => handleClick(buttonLabel, index)}
            key={index}
            style={[
              index === clickedId ? styles.buttonActive : styles.button,
              index === 0
                ? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}
                : {},
              index === 1
                ? {borderTopRightRadius: 10, borderBottomRightRadius: 10}
                : {},
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
});
