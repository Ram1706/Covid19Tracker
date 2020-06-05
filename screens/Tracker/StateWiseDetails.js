/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Content, Accordion, Icon, Spinner} from 'native-base';
import DistrictWiseDetails from '../Tracker/DistrictWiseDetails';

class StateWiseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://api.covid19india.org/v2/state_district_wise.json')
      .then(response => response.json())
      .then(data => this.setState({data: data, loading: false}));
  }

  displaySpinner() {
    return <Spinner color="green" />;
  }

  _renderHeader(item, expanded) {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6',
        }}>
        <Text style={{fontWeight: '600'}}> {item.state}</Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
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
        <Content style={{backgroundColor: 'white'}}>
          {this.state.loading && this.displaySpinner}
          {this.state.data && this.state.data.length > 1 ? (
            <Accordion
              dataArray={this.state.data}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              expanded={0}
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default StateWiseDetails;
