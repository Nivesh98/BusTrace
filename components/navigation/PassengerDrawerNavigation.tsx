import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../CustomComponent/CustomDrawer';
import PassengerAboutDrawer from '../screens/Passenger/PassengerAboutDrawer';
import PassengerMyWalletDrawer from '../screens/Passenger/PassengerMyWalletDrawer';
import PassengerNotificationDrawer from '../screens/Passenger/PassengerNotificationDrawer';
import PassengerProfileDrawer from '../screens/Passenger/PassengerProfileDrawer';
import PassengerSettingDrawer from '../screens/Passenger/PassengerSettingDrawer';
import PassengerSupportDrawer from '../screens/Passenger/PassengerSupportDrawer';
import {TabNavigator} from './TabNavigator';

const PassengerDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
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
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} color={color} />,
          headerTitle: 'Home',
          headerShown: false,
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={PassengerProfileDrawer}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person" size={22} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#dc143c', // Set your desired color here
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Transaction"
        component={PassengerMyWalletDrawer}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="payments" size={22} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#dc143c', // Set your desired color here
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={PassengerNotificationDrawer}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="notifications" size={22} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#dc143c', // Set your desired color here
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={PassengerSettingDrawer}
        options={{
          drawerIcon: ({color}) => <Icon name="tune" size={22} color={color} />,
          headerStyle: {
            backgroundColor: '#dc143c', // Set your desired color here
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Support"
        component={PassengerSupportDrawer}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="support" size={22} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#dc143c', // Set your desired color here
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="About"
        component={PassengerAboutDrawer}
        options={{
          drawerIcon: ({color}) => <Icon name="info" size={22} color={color} />,
          headerStyle: {
            backgroundColor: '#dc143c', // Set your desired color here
          },
          headerTintColor: '#fff',
        }}
      />
    </Drawer.Navigator>
  );
};

export default PassengerDrawerNavigation;
