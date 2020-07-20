import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <Grid style={styles.gridContainer}>
      <Row>
        <Col size={30}>
          <Text style={styles.alignLeft} onPress={() => Actions.DashBoards()}>
            DashBoard
            <Icon name="chart-line" size={20} color="#900" />
          </Text>
        </Col>
        <Col size={40}>
          <Text
            style={styles.alignCenter}
            onPress={() => Actions.StateWiseDetails()}>
            State Details
            <Icon name="sitemap" size={20} color="#900" />
          </Text>
        </Col>
        <Col size={30}>
          <Text style={styles.alignRight} onPress={() => Actions.DashBoards()}>
            DashBoard
            <Icon name="chart-line" size={20} color="#900" />
          </Text>
        </Col>
      </Row>
      <Row>
        <Col size={30}>
          <Text style={styles.alignLeft} onPress={() => Actions.DashBoards()}>
            DashBoard
            <Icon name="chart-line" size={20} color="#900" />
          </Text>
        </Col>
        <Col size={40}>
          <Text
            style={styles.alignCenter}
            onPress={() => Actions.StateWiseDetails()}>
            State Details
            <Icon name="sitemap" size={20} color="#900" />
          </Text>
        </Col>
        <Col size={30}>
          <Text style={styles.alignRight} onPress={() => Actions.DashBoards()}>
            DashBoard
            <Icon name="chart-line" size={20} color="#900" />
          </Text>
        </Col>
      </Row>
      <Row>
        <Col size={30}>
          <Text style={styles.alignLeft} onPress={() => Actions.DashBoards()}>
            DashBoard
            <Icon name="chart-line" size={20} color="#900" />
          </Text>
        </Col>
        <Col size={40}>
          <Text
            style={styles.alignCenter}
            onPress={() => Actions.StateWiseDetails()}>
            State Details
            <Icon name="sitemap" size={20} color="#900" />
          </Text>
        </Col>
        <Col size={30}>
          <Text style={styles.alignRight} onPress={() => Actions.DashBoards()}>
            DashBoard
            <Icon name="chart-line" size={20} color="#900" />
          </Text>
        </Col>
      </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
  gridContainer:{
    backgroundColor: '#d9c58f',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  alignCenter: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'black',
  },
  alignRight: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'black',
  },
  alignLeft: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'black',
  },
});

export default HomeScreen;
