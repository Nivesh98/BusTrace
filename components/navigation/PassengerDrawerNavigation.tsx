import {createDrawerNavigator} from '@react-navigation/drawer';
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
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home3" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={PassengerProfileDrawer} />
      <Drawer.Screen name="MyWallet" component={PassengerMyWalletDrawer} />
      <Drawer.Screen
        name="Notification"
        component={PassengerNotificationDrawer}
      />
      <Drawer.Screen name="Setting" component={PassengerSettingDrawer} />
      <Drawer.Screen name="Support" component={PassengerSupportDrawer} />
      <Drawer.Screen name="About" component={PassengerAboutDrawer} />
    </Drawer.Navigator>
  );
};

export default PassengerDrawerNavigation;
