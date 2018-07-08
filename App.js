import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  TouchableOpacity
  View 
} from 'react-native';

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


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Email</Text>
          <TextInput
              label = "Email"
              keyboardType = "email-address"
              placeholder = "Input email address"
              value = {this.state.email}
              onChangeText={(email)=>{this.handleOnChangeEmail(email)}}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            label="Password"
            placeholder = "Input password"
            value = {this.state.value}
            onChangeText = {(password) => {this.handleOnChangePassword(password)}}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={this.handleSigninButtonPressed}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
