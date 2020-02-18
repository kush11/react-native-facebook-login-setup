import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            image:''
        }

    }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log('dada', data);
                const requestUrl = `https://graph.facebook.com/v2.5/me?fields=email,name,friends,picture.type(large)&access_token=${data.accessToken}`;
                fetch(requestUrl)
                  .then(response => response.json())
                  .then(response => {
                    console.log('response', response);
                    this.setState({name:response.name, image:response.picture.data.url})
                  })
                  .catch(err => {
                    console.log('err', err);
                  });
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
        <Text>UserName: {this.state.name}</Text>
        <Text>User Image</Text>
        <Image 
        style={{height:100,width:100}}
        source={{uri:this.state.image}}/>
      </View>
    );
  }
}
