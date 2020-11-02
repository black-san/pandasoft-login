import axios from 'axios';


const API_ENDPOINT = "http://178.128.24.91:8081/api/"

function Login(params){
    var {username, password} = params;

    var accessToken = localStorage.getItem('access_token');
    var authorization = 'Bearer ' + accessToken;
    var options = {
        method: 'GET',
        url: API_ENDPOINT,
        headers: {'content-type': 'application/json', authorization: authorization},
        body: {username: username, password: password}
      };

    
      
    axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      localStorage.setItem("isLoggedIn", false)
      return false;
    });

    return false;
}
export default Login;