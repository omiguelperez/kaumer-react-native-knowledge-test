import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Empleados'
      }
    },
    Notifications: {
      screen: SettingsScreen,
      navigationOptions: {
        drawerLabel: 'Configuración'
      }
    },
  }, {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerWidth: 200
  }
);
