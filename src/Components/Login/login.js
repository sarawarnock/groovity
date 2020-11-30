// generate a call to the /authorize endpoint for the web API
// to use the Web API, need to authorize with OAuth 2.0
// NOTE: OAuth is NOT an authentication protocol in itself, it is used INSIDE of authentical protocosl, 
// POST https://accounts.spotify.com/api/token
// Req body parameters: grant_type = "authorization_code", code = code returned from the inital request to the /authorize endpoint -- this comes in the form of the redirect_uri -- /code="" and that's where we get the code
    //need to take that out and use that in the POST request 
    // redirect_uri = used for validation only, must match exactly the value of redirect_uri supplied when requestin the authorization code
//Header parameters: authorization = required, base 64 encoded string that contains the client ID and client secret key. The field must have the format: Authorization: Basic *<base64 encoded client_id:client_secret>*

//curl -H "Authorization: Basic NmJmZTA4MDU4Nzg2NDhhZThhYzRiNjI1ZWQ4NTliYTc6OTIyNzJmYzI4MTgyNGJkM2IyOWM1YTZlODU1OTllODM=" -d grant_type=authorization_code -d code=AQB6zHGje3au4jbj4SBJrbZx283DMMmsyDvWNDNIYMnPqyJh8Ddq8hWxN2cv18KD46iskIg5yGf_bcmvjhsCQenwhkTRSHsRftOvjZbMGOE2MnDt9VkR63mAD2xAdc8wU3Veb20YmPES7IfHBtnmeJoIrWj_jWaviBnTSudvX8kQRLnJ66OhDD_qFXSyqff6y8LdqKJ2QuKVhdSup38p06eTy-UP -d redirect_uri=https%3A%2F%2Fgroovity.netlify.app%2F https://accounts.spotify.com/api/token

//{"access_token":"BQCV0R9VETSZw_ZVj_A90G3YbyQxBr4gEtk04wOBAfkAEkW9_fDxWLt9fbajERCSAbH5NtGPRERWRrjAjKYOqKV7pJxWZrzAAlpFO0WzOZjKHUPYrQtlvuNHaAEutaxh2j5OI89LFGfe6iWKszaY7oD2UQemvi-e5X8",
//"token_type":"Bearer","expires_in":3600,"refresh_token":"AQCi20W5TVuAF5zxXr0u72YmpjcM3lZLF4ZtSDRzLoo8oCUiaS2lNjniTDEz3BEsthKNW87rk-tEABiGVOpiPbclRml--g9m3R1UCLsFcoeMvSAz1CWDogeNJKwxbuI1c5U",
//"scope":"user-read-email user-read-private"}

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