import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    id: '1',
    busNo: 'OI8cRKl6vYf...',
    date: '2023-01-02',
    route: 'Makubur-Matara',
    charge: 400,
  },
  {
    id: '2',
    busNo: 'WAAdj3bjLrf...',
    date: '2023-01-02',
    route: 'Makubur-Matara',
    charge: 580,
  },
  {
    id: '3',
    busNo: 'OI8cRKl6vYf...',
    date: '2023-01-02',
    route: 'Makubur-Matara',
    charge: 1000,
  },
  {
    id: '4',
    busNo: 'WAAdj3bjLrf...',
    date: '2023-01-02',
    route: 'Makubur-Matara',
    charge: 600,
  },
];

type ItemProps = {busNo: string; date: string; route: string; charge: number};

const Item = ({busNo, date, route, charge}: ItemProps) => (
  <View style={styles.item}>
    <View style={{padding: 5}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Bus No: </Text>
        <Text style={styles.text}>{busNo}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            marginRight: 15,
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Date:{' '}
        </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            marginRight: 10,
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Route:{' '}
        </Text>
        <Text style={styles.text}>{route}</Text>
      </View>
    </View>
    <View style={{padding: 5}}>
      <Text style={styles.text}>Charge: {charge} Rs</Text>
    </View>
  </View>
);

const PassengerMyWalletDrawer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            busNo={item.busNo}
            date={item.date}
            route={item.route}
            charge={item.charge}
          />
        )}
        keyExtractor={item => item.id}
        style={{marginTop: 10, marginBottom: 10}}
      />
    </View>
  );
};

export default PassengerMyWalletDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ff9e66',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
