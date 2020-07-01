import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen47508Navigator from '../features/BlankScreen47508/navigator';
import BlankScreen47496Navigator from '../features/BlankScreen47496/navigator';
import BlankScreen47464Navigator from '../features/BlankScreen47464/navigator';
import BlankScreen67462Navigator from '../features/BlankScreen67462/navigator';
import BlankScreen47461Navigator from '../features/BlankScreen47461/navigator';
import BlankScreen47459Navigator from '../features/BlankScreen47459/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen47508: { screen: BlankScreen47508Navigator },
BlankScreen47496: { screen: BlankScreen47496Navigator },
BlankScreen47464: { screen: BlankScreen47464Navigator },
BlankScreen67462: { screen: BlankScreen67462Navigator },
BlankScreen47461: { screen: BlankScreen47461Navigator },
BlankScreen47459: { screen: BlankScreen47459Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
