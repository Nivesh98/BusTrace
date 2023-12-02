import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

export const HomeScreenDriver = () => {
  const {logout} = useContext(AuthContext);
  const {userToken, isLoading} = useContext(AuthContext);
  console.log('user token inside home ', {userToken}, {isLoading});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
});
