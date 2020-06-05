import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Col, Row, Grid} from 'react-native-easy-grid';

const HomeScreen = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Text style={styles.welcome} onPress={() => Actions.DashBoards()}>
            Go To DashBoard
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text
            style={styles.welcome}
            onPress={() => Actions.StateWiseDetails()}>
            State Wise Covid 19 Details
          </Text>
        </Col>
      </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default HomeScreen;
