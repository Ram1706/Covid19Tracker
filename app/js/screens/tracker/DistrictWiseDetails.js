import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

class DistrictWiseDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const stateDetail = this.props.item;
    return (
      <View style={styles.container}>
        <Grid>
          <Row>
            <Col size={30}>
              <SingleColItem
                alignStyle={styles.alignLeft}
                title="District"
                content={stateDetail.district}
              />
            </Col>
            <Col size={40}>
              <SingleColItem
                alignStyle={styles.alignCenter}
                title="Confirmed"
                content={stateDetail.confirmed}
                dailyCount={stateDetail.delta.confirmed}
              />
            </Col>
            <Col size={40}>
              <SingleColItem
                alignStyle={styles.alignCenter}
                title="Recovered"
                content={stateDetail.recovered}
                dailyCount={stateDetail.delta.recovered}
              />
            </Col>
            <Col size={40}>
              <SingleColItem
                alignStyle={styles.alignCenter}
                title="Deceased"
                content={stateDetail.deceased}
                dailyCount={stateDetail.delta.deceased}
              />
            </Col>
            <Col size={30}>
              <SingleColItem
                alignStyle={styles.alignRight}
                title="Active"
                content={stateDetail.active}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 400,
    height: 60,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  alignLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  contentText: {
    fontFamily: 'Roboto-Regular',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

const SingleColItem = props => {
  const {alignStyle, title, content} = props;
  return (
    <Row>
      <Col>
        <Row>
          <Col style={alignStyle}>
            <Text style={styles.titleText}>{title}</Text>
          </Col>
        </Row>
        <Row>
          <Col style={alignStyle}>
            <Text style={styles.contentText}>{content}</Text>
            {/* {dailyCount ? (
              <Text style={styles.contentText}>{dailyCount}</Text>
            ) : null} */}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DistrictWiseDetails;
