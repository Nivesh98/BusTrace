import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    id: '1',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '2',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '3',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '4',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '5',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '6',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '7',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
  },
  {
    id: '8',
    busNo: 'First Item',
    date: '2023-01-02',
    route: 'Kandy- Colombo',
    charge: 400,
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
            marginRight: 10,
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Route:{' '}
        </Text>
        <Text style={styles.text}>{route}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginRight: 10,
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Passed Location:
        </Text>
        <Text style={styles.text1}>{route}</Text>
      </View>
    </View>
    <View style={{padding: 5}}>
      <View style={{flexDirection: 'row', marginLeft: -110}}>
        <Text style={styles.text}>Date: </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: -110}}>
        <Text style={styles.text}>Time: </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
    </View>
  </View>
);

const PassengerNotificationDrawer = () => {
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

export default PassengerNotificationDrawer;

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
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
