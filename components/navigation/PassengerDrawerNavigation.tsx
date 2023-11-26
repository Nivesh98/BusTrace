import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';

const PassengerDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home3" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default PassengerDrawerNavigation;
