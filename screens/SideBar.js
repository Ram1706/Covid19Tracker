/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Button,
  Icon,
} from 'native-base';
const routes = [
  'ScarletScreen',
  'GrayScreen',
  'TrackerDetailsStateandDistrictWise',
];
export default class SideBar extends React.Component {
  navigate = screen => {
    if (screen === 'ScarletScreen') {
      Actions.ScarletScreen();
    } else if (screen === 'GrayScreen') {
      Actions.GrayScreen();
    } else if (screen === 'TrackerDetailsStateandDistrictWise') {
      Actions.TrackerDetailsStateandDistrictWise();
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            contentContainerStyle={{marginTop: 20}}
            renderRow={data => {
              return (
                <ListItem button>
                  <Text
                    onPress={() => {
                      this.navigate(data);
                    }}>
                    {data}
                  </Text>
                </ListItem>
              );
            }}
          />
          <Button transparent>
            <Icon
              name="menu"
              onPress={() => {
                Actions.drawerClose();
              }}
            />
          </Button>
        </Content>
      </Container>
    );
  }
}
