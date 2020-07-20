/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

class AgeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  chartData = () => {
    return {
      labels: [
        '0-10',
        '11-20',
        '21-30',
        '31-40',
        '41-50',
        '51-60',
        '61-70',
        '71-80',
        '81-90',
        '91-100',
      ],
      datasets: [
        {
          data: this.getAges(),
        },
      ],
    };
  };

  getAges = () => {
    const ages = Array(10).fill(0);
    this.props.data.forEach(patient => {
      if (patient.agebracket) {
        // eslint-disable-next-line radix
        const age = parseInt(patient.agebracket);
        for (let i = 0; i < 10; i++) {
          if (age > i * 10 && age <= (i + 1) * 10) {
            ages[i]++;
          }
        }
      }
    });
    return ages;
  };

  // {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data: [20, 45, 28, 80, 99, 43],
  //     },
  //   ],
  // }

  render() {
    return (
      <View>
        <BarChart
          data={this.chartData()}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel={'P'}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}

export default AgeChart;
