/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {getStateWiseDetails} from './utils/trackerutils';
import {Form, Item, Picker, Icon} from 'native-base';
import {STATES as states} from '../screens/utils/constants';
import AgeChart from '../screens/dashboards/AgeChart';
import axios from 'axios';

class DashBoards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      selectedState: '',
    };
  }

  componentDidMount() {
    if (this.state.loading) {
      this.getStates();
    }
  }

  getStates = async () => {
    try {
      const [rawDataResponse, stateDailyResponse] = await Promise.all([
        axios.get('https://api.covid19india.org/raw_data.json'),
        axios.get('https://api.covid19india.org/states_daily.json'),
      ]);
      this.setState({ageDetails: rawDataResponse.data.raw_data});
      this.setState({data: stateDailyResponse.data, loading: false});
    } catch (err) {
      console.log(err);
    }
  };

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

  render() {
    return this.state.data.states_daily ? (
      <View style={styles.container}>
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
        <LineChart
          data={getStateWiseDetails(this.state.data.states_daily)}
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
        <AgeChart title="Patients by Age" data={this.state.ageDetails} />
      </View>
    ) : null;
  }
}

export default DashBoards;

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
