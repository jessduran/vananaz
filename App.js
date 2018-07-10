import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const image = require('./logo.png');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleSigninButtonPressed = this.handleSigninButtonPressed.bind(this);
  }

  handleOnChangeEmail(email) {
    this.setState({ email })
  }

  handleOnChangePassword(password) {
    this.setState({ password })
  }

  handleSigninButtonPressed() {
    //handle signin
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={image}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.card}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                  label = "Email"
                  keyboardType = "email-address"
                  placeholder = "Input email address"
                  placeholderStyle = {styles.placeholder}
                  value = {this.state.email}
                  style = {styles.input}
                  onChangeText={(email)=>{this.handleOnChangeEmail(email)}}
              />
            </View>
            <Text style={styles.errorText}>
              Error
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                label = "Password"
                placeholder = "Input password"
                placeholderStyle = {styles.placeholder}
                value = {this.state.password}
                style = {styles.input}
                onChangeText={(password)=>{this.handleOnChangePassword(password)}}
                secureTextEntry
              />
            </View>
            <Text style={styles.errorText}>
              Error
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleSigninButtonPressed}>
              <Text style={styles.buttonText}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#7c57bb',
    borderRadius: 5,
    height: 30,
  },
  buttonContainer: {
    height: 50,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: 12
  },
  card: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  errorText: {
    color: 'red',
    fontStyle: 'italic',
    paddingTop: 3
  },
  form: {
    width: '100%',
  },
  image: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 3.5,
    marginVertical: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2,
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    paddingVertical: 10,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#7c57bb',
    borderRadius: 5,
    height: 30,
  },
  label: {
    color: '#000',
    fontSize: 20,
    paddingVertical: 3,
    fontWeight: '600'
  },
  placeholder: {
    fontStyle: 'italic'
  }
});
