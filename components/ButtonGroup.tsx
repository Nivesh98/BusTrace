import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

// type Props = {
//   buttons: string[];
//   doSomethingAfterClick: () => number;
// };

export const ButtonGroup = ({buttons, doSomthingAfterClick}) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (item: any, id: any) => {
    setClickedId(id), doSomthingAfterClick(item);
  };
  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity
            onPress={item => handleClick(item, index)}
            key={index}
            style={[
              index === clickedId ? styles.buttonActive : styles.button,
              index === 0
                ? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}
                : '',
              index === 1
                ? {borderTopRightRadius: 10, borderBottomRightRadius: 10}
                : '',
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
