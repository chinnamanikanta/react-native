/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Alert,
  StyleSheet,
  Switch,
  CheckBox,
} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-material-dropdown';

import {Input, Icon} from 'react-native-elements';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import {gotoCountryList} from '../../utils/NavigationUtils';

const radio_props = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Others', value: 2},
];
let branch = [
  {
    value: 'CSE',
  },
  {
    value: 'ECE',
  },
  {
    value: 'EEE',
  },
];

type LoginProps = {
  width: number;
  onPress: () => void;
};

@observer
class Login extends Component<LoginProps> {
  @observable date: Date = new Date();
  @observable trueSwitchIsOn: boolean = true;
  @observable isSelected: boolean = false;

  onChangeText = (text: string) => {
    Alert.alert('alert the text input is: ' + text);
  };

  _onPressButton = () => {
    Alert.alert('hello this is nice frameWork for javaScript');
    gotoCountryList();
  };

  setSelection = () => {
    this.isSelected = !this.isSelected;
  };

  render() {
    return (
      <View style={styles.body}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.signDIv}>
              <Text style={styles.signIn}>SignIn</Text>
              <Text style={styles.titleContent}>
                Please fill in this form to create an account
              </Text>
            </View>

            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={this.isSelected ? '#f5dd4b' : '#f4f3f4'}
              value={this.isSelected}
              onValueChange={this.setSelection}
              style={{width: 50}}
            />
            <Icon name="rowing" />

            <View style={styles.inputsDiv}>
              <Input style={styles.textInput} placeholder="FirstName" />
              <Input style={styles.textInput} placeholder="LastName" />
              <Input style={styles.textInput} placeholder="Mobile Number" />
              <Input style={styles.textInput} placeholder="Email" />
              <Input
                style={styles.textInput}
                placeholder="Password"
                leftIcon={<Icon name="lock" size={24} color="black" />}
              />
              <Input
                style={styles.textInput}
                placeholder="Confirm Password"
                leftIcon={<Icon name="lock" size={24} color="black" />}
              />
            </View>
            <View style={styles.gender}>
              <Text style={styles.textGender}>Select Your Gender:</Text>
              <RadioForm
                formHorizontal={true}
                animation={true}
                style={styles.radioForm}>
                {radio_props.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      borderWidth={1}
                      buttonSize={10}
                      buttonOuterSize={20}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
            <View>
              <Text>Select Your Branch</Text>
            </View>
            <DatePicker
              date={this.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              // onDateChange={date => this.onChange(date)}
            />

            <Dropdown label="select your branches" data={branch} />
            <CheckBox
              value={this.isSelected}
              onValueChange={this.setSelection}
              style={styles.checkbox}
            />

            <View>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['red', 'blue', 'green']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText} onPress={this._onPressButton}>
                  Sign in with Facebook
                </Text>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#663399',
  },
  container: {
    width: 420,
    paddingLeft: 20,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  signIn: {
    fontSize: 25,
    paddingTop: 10,
  },
  signDIv: {
    marginTop: 25,
    marginLeft: 13,
  },
  textInput: {
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: 'gray',
  },
  titleContent: {
    marginTop: 5,
  },
  inputsDiv: {
    marginTop: 5,
    width: 300,
  },

  gender: {
    padding: 0,
  },
  textGender: {
    marginLeft: 15,
    fontSize: 20,
  },
  radioForm: {
    marginTop: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  submitButton: {
    width: 150,
    marginLeft: 80,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  checkbox: {
    height: 60,
    width: 60,
  },
});

export default Login;
