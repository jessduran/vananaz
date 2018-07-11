import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
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
      errorEmail: '',
      errorPassword: '',
      disabled: false,
    }

    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleSigninButtonPressed = this.handleSigninButtonPressed.bind(this);
    this.handleEmailEditing = this.handleEmailEditing.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleOnChangeEmail(email) {
    this.setState({ email })
  }

  handleOnChangePassword(password) {
    this.setState({ password })
  }

  handleSigninButtonPressed() {
    if(!this.state.disabled){
      Alert.alert(
          'Login Success',
          '',
          [{text: 'OK', onPress: () => console.log('OK Pressed')},],
          { cancelable: true }
      )
    }
  }

  handleEmailEditing() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const email = this.state.email;

    if (email.length === 0) {
      this.setState({
        errorEmail: 'email is required',
        disabled: true,
      })
    }
    else if(reg.test(email) == false){
      this.setState({
        errorEmail: 'not correct format for email address',
        disabled: true,
      })
    }
    else {
      this.setState({
        errorEmail: '',
        disabled: false
      })
    }
  }

  handlePasswordEditing() {
    const passwordLength = this.state.password.length;
    if (passwordLength < 6 || passwordLength > 12) {
      this.setState({
        errorPassword: 'please use at least 6 - 12 characters',
        disabled: true,
      });
    }
    else {
      this.setState({
        errorPassword: '',
        disabled: false,
      })
    }
  }

  renderButton() {
    return this.state.disabled
      ?
      (<TouchableOpacity disabled={this.state.disabled}
        style={[styles.button, styles.buttonColor]}
        onPress={this.handleSigninButtonPressed}>
        <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>)
      :
      (<TouchableOpacity disabled={this.state.disabled}
        style={styles.button}
        onPress={this.handleSigninButtonPressed}>
        <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>);
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <ScrollView>
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
                    onEndEditing={(email)=>{this.handleEmailEditing()}}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
              </View>
              <Text style={styles.errorText}>
                {this.state.errorEmail}
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
                  onEndEditing={(password)=>{this.handlePasswordEditing()}}
                  secureTextEntry
                  underlineColorAndroid='rgba(0,0,0,0)'
                />
              </View>
              <Text style={styles.errorText}>
                {this.state.errorPassword}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              {this.renderButton()}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  buttonColor: {
    backgroundColor: '#c3c3c3',
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
    backgroundColor: '#faf8ff',
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
    width: '100%',
    height: '100%',
    marginVertical: 5,
    resizeMode: 'contain',
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
