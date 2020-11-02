import axios from 'axios';

const API_ENDPOINT_TOKEN = "http://178.128.24.91:8081/api/auth/oauth/token"
const CLIENT_ID = "panda-dev-auth-client"
const CLIENT_SECRET = "ZCuuZzRzyfWEKNL7uQEQhggiGdbrGuMNLCKDKKKvogPfkEgeEokYfnwMFHwcmjKb"

class TokenStore {

  constructor() {
      this.state = {
        accessToken: ''
      }
    }


  requestToken() {
    var options = {
      method: 'POST',
      url: API_ENDPOINT_TOKEN,
      headers: {'content-type': 'application/json'},
      data: {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }
    };
    
    axios.request(options).then( response => {
      console.log(response.data);
      this.saveTokens(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  saveTokens(params) {
    const {access_token} = params;

    localStorage.setItem('access_token', access_token);
    this.setState({ accessToken: access_token });
  }

    
  

}
export default new TokenStore();
