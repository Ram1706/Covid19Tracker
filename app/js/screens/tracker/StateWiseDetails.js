/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Content, Accordion, Icon, Spinner} from 'native-base';
import DistrictWiseDetails from '../tracker/DistrictWiseDetails';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getStateWiseDetails} from './services/action';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  getTotalCaseDetails,
  getDailyTotalCaseDetails,
} from '../utils/trackerutils';

class StateWiseDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStateWiseDetails({});
  }

  displaySpinner() {
    return <Spinner color="green" />;
  }

  _renderHeader(item, expanded) {
    return (
      // <View
      //   // eslint-disable-next-line react-native/no-inline-styles
      //   style={{
      //     flexDirection: 'row',
      //     padding: 10,
      //     justifyContent: 'space-between',
      //     alignItems: 'center',
      //     backgroundColor: '#A9DAD6',
      //   }}>
      //   <Text style={{fontWeight: '600'}}> {item.state}</Text>
      //   {expanded ? (
      //     <Icon style={{fontSize: 18}} name="remove-circle" />
      //   ) : (
      //     <Icon style={{fontSize: 18}} name="add-circle" />
      //   )}
      // </View>
      <View style={styles.headercontainer}>
        <Grid>
          <Row>
            <Col size={40}>
              <SingleColItem
                alignStyle={styles.alignLeft}
                title=""
                content={item.state}
              />
            </Col>
            <Col size={15}>
              <SingleColItem
                alignStyle={styles.alignCenter}
                aligndailyCountStyle={styles.alignCenterdaily}
                title="C"
                content={getTotalCaseDetails(item.districtData, 'Confirmed')}
                dailyCount={getDailyTotalCaseDetails(
                  item.districtData,
                  'Confirmed',
                )}
              />
            </Col>
            <Col size={15}>
              <SingleColItem
                alignStyle={styles.alignCenter}
                aligndailyCountStyle={styles.alignCenterdaily}
                title="R"
                content={getTotalCaseDetails(item.districtData, 'Recovered')}
                dailyCount={getDailyTotalCaseDetails(
                  item.districtData,
                  'Recovered',
                )}
              />
            </Col>
            <Col size={15}>
              <SingleColItem
                alignStyle={styles.alignCenter}
                aligndailyCountStyle={styles.alignCenterdaily}
                title="D"
                content={getTotalCaseDetails(item.districtData, 'Deceased')}
                dailyCount={getDailyTotalCaseDetails(
                  item.districtData,
                  'Deceased',
                )}
              />
            </Col>
            <Col size={15}>
              <SingleColItem
                alignStyle={styles.alignRight}
                title="A"
                content={getTotalCaseDetails(item.districtData, 'Active')}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
  _renderContent(stateDetails) {
    return (
      <FlatList
        data={stateDetails.districtData}
        renderItem={({item}) => <DistrictWiseDetails item={item} />}
        keyExtractor={item => item.district}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading && this.displaySpinner()}
        <Content style={{backgroundColor: 'white'}}>
          {this.props.stateDetails && this.props.stateDetails.length > 1 ? (
            <Accordion
              dataArray={this.props.stateDetails}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
          ) : null}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 500,
  },
  headercontainer: {
    flex: 1,
    width: 400,
    height: 60,
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1affd1',
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
  alignCenterdaily: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignRightdaily: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  alignLeftdaily: {
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
  const {alignStyle, aligndailyCountStyle, title, content, dailyCount} = props;
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
            <Col style={alignStyle}>
              <Text style={styles.contentText}>{content}</Text>
            </Col>
            {/* <Col style={aligndailyCountStyle}>
              {dailyCount > 0 ? (
                <Text style={styles.contentText}>{dailyCount}</Text>
              ) : null}
            </Col> */}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = store => ({
  stateDetails: store.getStateWiseTrackerDetails.data,
  loading: store.getStateWiseTrackerDetails.loading,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getStateWiseDetails: getStateWiseDetails,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateWiseDetails);
