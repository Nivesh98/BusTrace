import {createDrawerNavigator} from '@react-navigation/drawer';
import {useContext} from 'react';
import TimeTable from '../screens/Passenger/TimeTable';
import {CurrentTabContext, TabNavigator} from './TabNavigator';

const Drawer = createDrawerNavigator();

const PassengerDrawerNavigation: React.FC = () => {
  const {currentTab} = useContext(CurrentTabContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: currentTab,
      }}>
      <Drawer.Screen name="Home3" component={TabNavigator} />
      <Drawer.Screen name="Timetable" component={TimeTable} />
    </Drawer.Navigator>
  );
};

export default PassengerDrawerNavigation;
