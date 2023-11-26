import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigatorDriver} from './TabNavigatorDriver';

const DriverDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home3" component={TabNavigatorDriver} />
    </Drawer.Navigator>
  );
};

export default DriverDrawerNavigation;
