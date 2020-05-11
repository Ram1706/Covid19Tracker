import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import GrayScreen from './GrayScreen';
import ScarletScreen from './ScarletScreen';
import SideBar from './SideBar';
import TrackerDetailsStateandDistrictWise from '../screens/Tracker/TrackerDetailsStateandDistrictWise';

const Routes = () => (
  <Router>
    <Scene
      hideNavBar
      key="drawer"
      drawer
      contentComponent={SideBar}
      drawerWidth={300}
      drawerPosition="left"
      initial>
      <Scene key="root">
        <Scene key="ScarletScreen" component={ScarletScreen} title="Scarlet" />
        <Scene key="GrayScreen" component={GrayScreen} title="Gray" />
        <Scene
          key="TrackerDetailsStateandDistrictWise"
          component={TrackerDetailsStateandDistrictWise}
          title="TrackerDetailsStateandDistrictWise"
        />
      </Scene>
    </Scene>
  </Router>
);
export default Routes;
