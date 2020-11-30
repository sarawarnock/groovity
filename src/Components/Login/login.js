// generate a call to the /authorize endpoint for the web API
// to use the Web API, need to authorize with OAuth 2.0
// NOTE: OAuth is NOT an authentication protocol in itself, it is used INSIDE of authentical protocosl, 
// POST https://accounts.spotify.com/api/token
// Req body parameters: grant_type = "authorization_code", code = code returned from the inital request to the /authorize endpoint 
    // redirect_uri = used for validation only, must match exactly the value of redirect_uri supplied when requestin the authorization code
//Header parameters: authorization = required, base 64 encoded string that contains the client ID and client secret key. The field must have the format: Authorization: Basic *<base64 encoded client_id:client_secret>*