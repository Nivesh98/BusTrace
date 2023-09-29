import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const QRScreen = () => {
  const [data, SetData] = React.useState('scan something');
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={({data}) => SetData(data)}
        flashMode={RNCamera.Constants.FlashMode.off}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  homeScreen: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 5,
  },
  homeScreenText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
    backgroundColor: '#dc143c',
    flexDirection: 'row',
    width: '100%',
    padding: 5,
  },
});
