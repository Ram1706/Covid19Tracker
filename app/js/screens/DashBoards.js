/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {getStateWiseDetails} from './utils/trackerutils';
import {
  getAgeWiseDetails,
  getStateWiseDailyDetails,
} from './dashboards/services/action';
import {Form, Item, Picker, Icon, Spinner} from 'native-base';
import {STATES as states} from '../screens/utils/constants';
import AgeChart from '../screens/dashboards/AgeChart';
import axios from 'axios';

class DashBoards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedState: '',
    };
  }

  componentDidMount() {
    this.props.getAgeWiseDetails({});
    this.props.getStateWiseDailyDetails({});
  }

  addStateselectOptions() {
    const stateItems = [];
    states.forEach(state => {
      stateItems.push(<Picker.Item label={state} value={state} />);
    });
    return stateItems;
  }

  onValueChange(value) {
    this.setState({
      selectedState: value,
    });
  }

  displaySpinner() {
    return <Spinner color="green" />;
  }

  render() {
    console.log(this.props.ageDetailsloading+" -- "+this.props.stateDetailsloading);
    return this.props.stateDetails.states_daily ? (
      <View style={styles.container}>
        {this.props.stateDetails &&
          this.props.ageDetailsloading &&
          this.displaySpinner()}
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selectedState}
              onValueChange={this.onValueChange.bind(this)}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              {/* <Picker.Item label={"TN"} value={"TN"} />
              {this.addStateselectOptions()} */}
            </Picker>
          </Item>
        </Form>
        {!this.props.stateDetailsloading && !this.props.ageDetailsloading && (
          <LineChart
            data={getStateWiseDetails(this.props.stateDetails.states_daily)}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel={'C'}
            fromZero={true}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        )}
        {!this.props.stateDetailsloading && !this.props.ageDetailsloading && (
          <AgeChart title="Patients by Age" data={this.props.ageDetails} />
        )}
      </View>
    ) : null;
  }
}

const mapStateToProps = store => ({
  stateDetails: store.getStateWiseDailyDetails.data,
  stateDetailsloading: store.getStateWiseDailyDetails.loading,
  ageDetails: store.getAgeWiseDetails.data,
  ageDetailsloading: store.getAgeWiseDetails.loading,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getStateWiseDailyDetails: getStateWiseDailyDetails,
      getAgeWiseDetails: getAgeWiseDetails,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoards);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
