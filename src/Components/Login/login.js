// generate a call to the /authorize endpoint for the web API
// to use the Web API, need to authorize with OAuth 2.0
// NOTE: OAuth is NOT an authentication protocol in itself, it is used INSIDE of authentical protocosl, 
// POST https://accounts.spotify.com/api/token
// Req body parameters: grant_type = "authorization_code", code = code returned from the inital request to the /authorize endpoint -- this comes in the form of the redirect_uri -- /code="" and that's where we get the code
    //need to take that out and use that in the POST request 
    // redirect_uri = used for validation only, must match exactly the value of redirect_uri supplied when requestin the authorization code
//Header parameters: authorization = required, base 64 encoded string that contains the client ID and client secret key. The field must have the format: Authorization: Basic *<base64 encoded client_id:client_secret>*


//do we need state to save anything here??
//on login i just want the button to go directly to the third party Spotify login

import React, { useEffect } from 'react';

const Login = () => {

    return (
       <div>
           <button onClick={this.handleLogin}>Login</button>
       </div>
    )
}

export default Login