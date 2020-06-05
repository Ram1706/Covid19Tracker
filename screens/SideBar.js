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
const routes = ['HomeScreen', 'DashBoards', 'StateWiseDetails'];
export default class SideBar extends React.Component {
  navigate = screen => {
    if (screen === 'HomeScreen') {
      Actions.HomeScreen();
    } else if (screen === 'DashBoards') {
      Actions.DashBoards();
    } else if (screen === 'StateWiseDetails') {
      Actions.StateWiseDetails();
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
