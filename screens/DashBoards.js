/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {getStateWiseDetails} from './Utils/trackerutils';
import {Form, Item, Picker, Icon} from 'native-base';
import {STATES as states} from '../screens/Utils/constants';

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
    // Simple GET request using fetch
    fetch('https://api.covid19india.org/states_daily.json')
      .then(response => response.json())
      .then(data => this.setState({data: data, loading: false}));
  }

  addStateselectOptions() {
    const stateItems = [];
    console.log('stateItems' + JSON.stringify(stateItems));
    states.forEach(state => {
      console.log('state' + state);
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
          yAxisLabel={'P'}
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
