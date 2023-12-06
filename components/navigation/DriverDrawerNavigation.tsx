import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerDriver from '../CustomComponent/CustomDrawerDriver';
import {TabNavigatorDriver} from './TabNavigatorDriver';

const DriverDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerDriver {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#dc143c',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home3"
        component={TabNavigatorDriver}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} color={color} />,
          headerTitle: 'Home',
          headerShown: false,
          title: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DriverDrawerNavigation;
