import React, {Component} from 'react';
import {Text, View} from 'react-native';
import displayCountries from '../../fixtures/countries.json';

class CountryListDashBoard extends Component {
  render() {
    return (
      <View>
        {displayCountries.map(
          (country: {
            flag: any;
            name: React.ReactNode;
            population: React.ReactNode;
            region: React.ReactNode;
          }) => (
            <View>
              <Text>{country.name}</Text>
              <Text>{country.population}</Text>
              <Text>{country.region}</Text>
            </View>
          ),
        )}
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//   },
// });

export default CountryListDashBoard;
