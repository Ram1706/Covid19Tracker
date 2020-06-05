import React from 'react';
import {BackHandler, Alert} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import DashBoards from './DashBoards';
import HomeScreen from './HomeScreen';
import SideBar from './SideBar';
import StateWiseDetails from '../screens/Tracker/StateWiseDetails';

const Routes = () => (
  <Router
    backAndroidHandler={() => {
      if (Actions.currentScene === 'HomeScreen') {
        Alert.alert(
          'Exit',
          'Do you want to Exit the App?',
          [
            {
              text: 'No',
              onDismiss: () => {
                return true;
              },
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {cancelable: true},
        );
        return true;
      } else {
        Actions.pop();
      }
      return true;
    }}>
    <Scene
      hideNavBar
      key="drawer"
      drawer
      contentComponent={SideBar}
      drawerWidth={300}
      drawerPosition="left"
      initial>
      <Scene key="root">
        <Scene
          key="HomeScreen"
          component={HomeScreen}
          title="India Covid-19 Tracker"
        />
        <Scene key="DashBoards" component={DashBoards} title="DashBoard" />
        <Scene
          key="StateWiseDetails"
          component={StateWiseDetails}
          title="India Covid-19 State Wise Details"
        />
      </Scene>
    </Scene>
  </Router>
);
export default Routes;
