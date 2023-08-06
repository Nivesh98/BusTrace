import * as React from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Padding} from '@mui/icons-material';

export const QRScreen = () => {
  const [data, SetData] = React.useState('scan something');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.menu}>
            <View>
              <Icon name="menu" size={24} color={'#fff'} />
            </View>
            <View style={styles.homeScreen}>
              <Text style={styles.homeScreenText}>QR Scan</Text>
            </View>
          </View>
          <View style={{}}>
            <QRCodeScanner
              onRead={({data}) => SetData(data)}
              flashMode={RNCamera.Constants.FlashMode.off}
              reactivate={true}
              reactivateTimeout={500}
              topContent={
                <View>
                  <Text>{data}</Text>
                </View>
              }
              showMarker={true}
              containerStyle={{flex: 1}}
              cameraContainerStyle={{flex: 1, padding: 50,}}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
