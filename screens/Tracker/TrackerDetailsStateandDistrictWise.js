import React from 'react';
import {View, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Text} from 'native-base';

const style = StyleSheet.create({
  container: {
    flex: 1,
    textDecorationColor: 'red',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  innercontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    height: 100,
    width: 100,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
  },
  rowBack: {
    alignItems: 'flex-start',
    backgroundColor: '#DDD',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
  },
  scrollView: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
  },
});

export default class TrackerDetailsStateandDistrictWise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://api.covid19india.org/v2/state_district_wise.json')
      .then(response => response.json())
      .then(data => this.setState({data: data}));
  }

  getStateWiseDetails(details) {
    const stateWiseData = [];
    details &&
      details.forEach((data, index) => {
        const detail = {key: index, deatils: data};
        stateWiseData.push(detail);
      });
    return stateWiseData;
  }

  getDistricwiseData(districInfoDetails) {
    const districData = [];
    if (districInfoDetails) {
      districInfoDetails &&
        districInfoDetails.forEach(districInfo => {
          districData.push(
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{flexDirection: 'column'}} key={districInfo.district}>
              <Text>district:{districInfo.district}</Text>
            </View>,
          );
        });
    }
    return districData;
  }

  render() {
    const listViewData = this.state.data ? this.state.data : [];
    const stateWiseInfo =
      listViewData && this.getStateWiseDetails(listViewData);
    console.log('stateWiseInfo' + JSON.stringify(stateWiseInfo));
    return (
      <ScrollView style={style.scrollView}>
        {stateWiseInfo && (
          <SwipeListView
            useFlatList
            data={stateWiseInfo}
            renderItem={data => (
              <TouchableHighlight>
                <View style={style.rowFront}>
                  <Text>State:{data.item.deatils.state}</Text>
                  <Text>State Code:{data.item.deatils.statecode}</Text>
                </View>
              </TouchableHighlight>
            )}
            renderHiddenItem={data => (
              <View style={style.rowBack}>
                {this.getDistricwiseData(data.item.deatils.districtData)}
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        )}
      </ScrollView>
    );
  }
}
