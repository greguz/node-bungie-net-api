# OAuth

[Here](https://github.com/Bungie-net/api/wiki/OAuth-Documentation) you can read the original documentation about OAuth protocol.

The first thing you need to do is to create an official Bungie.net App on [their portal](https://www.bungie.net/en/Application).

You can choose between 3 types of authentication. The authentication is only needed when you need to access some other user's info. To [read the manifest](./Destiny2.md#getDestinyManifest) you just need the api key of the app.

## Application types

### Not applicable

This is the simpliest form of App integration. This kind of app **cannot** access user's data, so you will not be able to do an OAuth request (or retrieve any access token).

### Public

This app can request an access token, but not a refresh token. This kind of app can store users' access tokens in an untrusted manner (like a file saved inside an Android device).

This app will also provide a client identifier and a client secret.

### Private or Confidential

This kind of app can create a refresh token that can be used to keep user's authorization for longer times. All tokens **must** be protected somehow.

This app will also provide a client identifier and a client secret.

## OAuth protocol

The full flow consist in 2 redirects. First you need to redirect the user to the authorization page on the Bungie.net servers.

You can use the `getAuthorizationUrl` method from the `BungieApi` class to create this URL.

```javascript
import { BungieApi } from 'bungie.net'

const api = new BungieApi({
  apiKey: 'myApiKey',
  clientId: 'myClientId',
  clientSecret: 'myClientSecret'
})

// Redirect the user to this url...
const url = api.getAuthorizationUrl('MySecretState')
```

The user will land into a form that asks to authenticate with its preferred method (Steam, PSN, Stadia, etc). After a successfull authentication, the user will be redirected to the URL that was specified while creating the App.

This URL should be a server controlled by the app's developer. Inside the querystring you should find two fields: `state` and `code`.

You need to verify that the `state` value matches with the state you specified when the redirect URL was created, otherwise the response **must** be considered tampered.

Now you can authorize the client with the `authorize` method.

```javascript
// Example parsed querystring object
const qs = {
  code: 'BungieNetAuthCode',
  state: 'MySecretState'
}

if (qs.state !== 'MySecretState') {
  throw new Error('Not secure!')
}

await api.authorize(qs.code)
```

At this point, at least an access token is created.

```javascript
console.log(api.accessToken.raw)
```

If you have configured a private app, you should also receive a valid refresh token.

```javascript
if (api.refreshToken) {
  console.log(api.refreshToken.raw) // private app!
}
```

You should safely store the refresh token, and reload It when you want to make a request authorized by that user.

```javascript
const _api = new BungieApi({
  apiKey: 'myApiKey',
  clientId: 'myClientId',
  clientSecret: 'myClientSecret',
  refreshToken: 'myRefreshToken'
})
```
